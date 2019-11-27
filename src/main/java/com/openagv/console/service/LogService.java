package com.openagv.console.service;

import com.duangframework.db.mongodb.common.MongoDao;
import com.duangframework.kit.ToolsKit;
import com.duangframework.mvc.annotation.Import;
import com.duangframework.mvc.annotation.Service;
import com.openagv.console.entity.Logs;

import java.util.List;


/**
 * 日志业务逻辑处理类
 *
 * @author Laotang
 */
@Service
public class LogService {

    @Import
    private MongoDao<Logs> logsDao;

    public String index() {
        List<Logs> logsList = null;
        try {
            logsList = logsDao.findAll(); //(new Query().eq(IdEntity.ID_FIELD, "5dd5e6e6685de039dbb7ca6f"));
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(ToolsKit.isEmpty(logsList)) {
            throw new NullPointerException("logs is null");
        }
        StringBuilder xml = new StringBuilder("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<rows>\n" +
                "\t<head>\n" +
                "\t\t<column width=\"100\" type=\"ed\" align=\"center\" sort=\"str\">车辆/设备</column>\n" +
                "\t\t<column width=\"80\" type=\"ed\" align=\"left\" sort=\"str\">请求命令</column>\n" +
                "\t\t<column width=\"*\" type=\"ed\" align=\"left\" sort=\"str\">返回结果</column>\n" +
                "\t\t<column width=\"60\" type=\"ed\" align=\"center\" sort=\"str\">类型</column>\n" +
                "\t\t<column width=\"50\" type=\"ch\" align=\"center\" sort=\"str\">状态</column>\n" +
                "\t</head>\n");

        for (Logs logs : logsList) {
            xml.append("\t<row id=\"" + logs.getRequestId() + "\">\n");
            xml.append("\t\t<cell>A030</cell>\n");
            xml.append("\t\t<cell>" + logs.getCmd() + "</cell>\n");
            xml.append("\t\t<cell>" + logs.getResult() + "</cell>\n");
            xml.append("\t\t<cell>" + logs.getType() + "</cell>\n");
            xml.append("\t\t<cell>" + logs.getState() + "</cell>\n");
            xml.append("\t</row>\n");
        }

        xml.append("</rows>");
        return xml.toString();
    }

    public String index2() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
                "<rows>\n" +
                "\t<head>\n" +
                "\t\t<column width=\"*\" type=\"ed\" align=\"left\" sort=\"str\">车辆</column>\n" +
                "\t\t<column width=\"80\" type=\"ed\" align=\"left\" sort=\"str\">状态</column>\n" +
                "\t\t<column width=\"60\" type=\"ed\" align=\"center\" sort=\"str\">适配器</column>\n" +
                "\t\t<column width=\"50\" type=\"ch\" align=\"center\" sort=\"str\">启用？</column>\n" +
                "\t\t<column width=\"50\" type=\"ed\" align=\"center\" sort=\"str\">位置</column>\n" +
                "\t</head>\n" +
                "\t<row id=\"1\">\n" +
                "\t\t<cell>A030</cell>\n" +
                "\t\t<cell>IDLE</cell>\n" +
                "\t\t<cell>创智科技</cell>\n" +
                "\t\t<cell>1</cell>\n" +
                "\t\t<cell>1</cell>\n" +
                "\t</row>\n" +
                "\t<row id=\"2\">\n" +
                "\t\t<cell>A031</cell>\n" +
                "\t\t<cell>UNKNOWN</cell>\n" +
                "\t\t<cell>创智科技</cell>\n" +
                "\t\t<cell>0</cell>\n" +
                "\t\t<cell>2</cell>\n" +
                "\t</row>\n" +
                "\t<row id=\"3\">\n" +
                "\t\t<cell>A033</cell>\n" +
                "\t\t<cell>EXECUTING</cell>\n" +
                "\t\t<cell>创智科技</cell>\n" +
                "\t\t<cell>1</cell>\n" +
                "\t\t<cell>3</cell>\n" +
                "\t</row>\n" +
                "\t<row id=\"4\">\n" +
                "\t\t<cell>A033</cell>\n" +
                "\t\t<cell>ERROR</cell>\n" +
                "\t\t<cell>创智科技</cell>\n" +
                "\t\t<cell>0</cell>\n" +
                "\t\t<cell>4</cell>\n" +
                "\t</row>\n" +
                "</rows>";
    }

}
