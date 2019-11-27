package com.openagv.console.entity;

import com.duangframework.db.IdEntity;
import com.duangframework.db.annotation.Entity;
import com.duangframework.mvc.annotation.Param;

import java.util.Date;

/**
 *日志记录对象
 *
 * @author Laotang
 */
@Entity(name="Sys_Log")
public class Logs extends BaseEntity {

    public static final String ENTITY_FIELD = "Sys_Log";
    private static final String OPEN_AGV_FIELD = "openAGV";
    private static final Date CURRENT_DATE = new Date();
    private static final String DEPARTMENT_ID = "softDev";
    private static final String PROJECT_ID = "showroom";
    private static final String COMPANY_ID = "makerwit";

    @Param(label = "请求ID")
    private String requestId;

    @Param(label = "请求命令")
    private String cmd;

//    @Param(label = "请求协议对象")
//    private Protocol protocol;

    /**如果系统抛出异常**/
    @Param(label = "返回结果")
    private String result;

    @Param(label = "状态" , desc = "如果返回200则代表流程处理没有抛出异常,非200值，则有异常")
    private Integer state;

    @Param(label="请求类型")
    private String type;

    public Logs() {
        super(null, CURRENT_DATE, OPEN_AGV_FIELD, CURRENT_DATE, OPEN_AGV_FIELD, IdEntity.STATUS_FIELD_SUCCESS, OPEN_AGV_FIELD, DEPARTMENT_ID, PROJECT_ID, COMPANY_ID);
    }

    public Logs(String requestId, String cmd, String result, Integer state, String type) {
        super(null, CURRENT_DATE, OPEN_AGV_FIELD, CURRENT_DATE, OPEN_AGV_FIELD, IdEntity.STATUS_FIELD_SUCCESS, OPEN_AGV_FIELD, DEPARTMENT_ID, PROJECT_ID, COMPANY_ID);
        this.requestId = requestId;
//        this.protocol = protocol;
        this.result = result;
        this.cmd = cmd;
        this.state = state;
        this.type = type;
    }

    public Logs(String id, Date createTime, String createUserId, Date updateTime, String updateUserId, String status, String source, String DEPARTMENT_ID, String PROJECT_ID, String COMPANY_ID, String requestId,  String result, Integer state) {
        super(id, createTime, createUserId, updateTime, updateUserId, status, source, DEPARTMENT_ID, PROJECT_ID, COMPANY_ID);
        this.requestId = requestId;
//        this.protocol = protocol;
        this.result = result;
        this.state = state;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

//    public Protocol getProtocol() {
//        return protocol;
//    }
//    public void setProtocol(Protocol protocol) {
//        this.protocol = protocol;
//    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCmd() {
        return cmd;
    }

    public void setCmd(String cmd) {
        this.cmd = cmd;
    }

    @Override
    public String toString() {
        return "Log{" +
                "requestId='" + requestId + '\'' +
                ", result='" + result + '\'' +
                ", state=" + state +
                ", type=" + type +
                '}';
    }
}
