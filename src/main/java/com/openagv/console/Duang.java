package com.openagv.console;

import com.duangframework.db.mongodb.client.MongoClientAdapter;
import com.duangframework.db.mongodb.plugin.MongodbPlugin;
import com.duangframework.mvc.http.enums.EnvEnum;
import com.duangframework.mvc.plugin.IPlugin;
import com.duangframework.mvc.plugin.PluginChain;
import com.duangframework.server.Application;

import java.util.List;

/**
 * 启动类
 */
public class Duang {

    public static void main(String[] args) {
        Application.duang().port(9090)
                /*
                .handles(new HandlerChain() {
                    @Override
                    public void before(List<IHandler> beforeHandlerList) {
//                        beforeHandlerList.add(new ParamsValidHandler());
                        beforeHandlerList.add(new RequestHandler());
                        beforeHandlerList.add(new TokenIdHandler());
                    }
                    @Override
                    public void after(List<IHandler> afterHandlerList) {
                        afterHandlerList.add(new LogHandler()); //请求日志处理器
                    }
                })
                 */
                .plugins(new PluginChain() {
                    @Override
                    public void addPlugin(List<IPlugin> pluginList) throws Exception {
                        // 后台权限验证,dev模式下可以先注释
//                        pluginList.add(new SecurityPlugin(new SecurityHandler(SealSecurity.getInstance().securitys())));
                        // mongodb
                        pluginList.add(new MongodbPlugin(new MongoClientAdapter.Builder()
                                .database("openAGV")
                                .host("192.168.8.184")
                                .port(27017)
                                .username("admin")
                                .password("1b88ab6d")
                                .build()));
                    }
                })
                .env(EnvEnum.DEV)
//                .init(new SysInitRun())
                .cors(true)
                .run();
    }

}

