
var localEndPoint = "http://127.0.0.1:9090";
var endPoint = "http://192.168.8.211:55200";

var API = {
    LOG: {
        INDEX : localEndPoint + "/log/index"
    },
    // 车辆驱动程序
    VEHICLE_DRIVE : {
        VEHICLE_LIST : endPoint + "/console/getvehiclelist",
        GET_VEHICLE : endPoint + "/console/getvehicle",
        SET_POSITION : endPoint + "/console/position",
        SET_STATUS : endPoint + "/console/state",
        VEHICLE_PAUSED : endPoint + "/console/paused",
        NEXT_BUTTON : endPoint + "/console/nextstepbutton",
        SET_MODE : endPoint + "/console/setsinglestepmode",
        CONTINUE_MOVE : endPoint + "/console/continuevehiclemove",
        ENABLE_ADAPTER : endPoint + "/console/enableadapter",
        SET_ORIENTATION : endPoint + "/console/orientation",
        SET_ENERGY_LEVEL : endPoint + "/console/energylevel"

    }

};