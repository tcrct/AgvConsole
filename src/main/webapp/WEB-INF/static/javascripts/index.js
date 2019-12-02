/**
 * 车辆列表
 * */
// function vehicleList() {
//      new HttpKit().url(API.VEHICLE_DRIVE.VEHICLE_LIST).get(function (data) {
//          // console.log(data.A030.processModel.maxFwdVelocity)
//
//          $.each(data, function (key, value) {
//              //设置表列信息
//              initVehicleTable(value);
//              // 设置车辆属性
//              // setVehicleAattributes(value);
//          });
//      });
// }

var VEHICLE_NAME;
//设置表列信息
function initVehicleTable(vehicleName) {
    // console.log(vehicleName);
    VEHICLE_NAME = vehicleName;
    var parmas = {
        "vehicleName": vehicleName
    };
    new HttpKit().url(API.VEHICLE_DRIVE.GET_VEHICLE).params(parmas).get(function (data) {
        setVehicleAattributes(data)
    });
}

// 设置车辆属性
function setVehicleAattributes(data) {
    // 最大前进速度
    $("#maxFwdVelocity").val(data.maxFwdVelocity);
    // 最大后退速度
    $("#maxRevVelocity").val(data.maxRevVelocity);
    // 加速
    $("#maxAcceleration").val(data.maxAcceleration);
    // 减速
    $("#maxDeceleration").val(data.maxDeceleration);

    // 适配器
    var enable = data.adapterEnabled;
    $("#adapterEnabled").prop("checked", enable); //标准写法，推荐！
    if(enable) {
        dhxGrid.cells(dhxGrid.getSelectedId(), 4).setValue(1);
    }

    // 能量等级
    addOptionEnergy(data.energyLevel);
    // $("#energyLevel").val(data.energyLevel);
    // 位置
    addOption(combo_position, data.positionList);
    // 状态
    addOption(combo_status, data.stateList);
    // 方向
    //$("#orientationAngle").val(data.orientationAngle);
    addOptionOrientationAngle(data.orientationAngle);
    // 暂停车辆
    // $("#vehiclePaused").prop("checked",true);
    if(data.vehiclePaused) {
        eventForm.setFormData({"vehiclePaused":"vehiclePaused"});
    }
    // 命令调试(为true时，为手动)
    var bool = data.commandScheduling;
    bool ? commonForm.setFormData({"commandScheduling":"manualModel"}) :
        commonForm.setFormData({"commandScheduling":"autoModel"});
}

function addOptionEnergy(value) {
    combo_energy.clearAll();
    var optionArray = [];
    for (var i = 100; i > 0; i--) {
        var array = [];
        array.push(i, i);
        optionArray.push(array);
    }
    combo_energy.addOption(optionArray);
    // console.log("############:" + JSON.stringify(value))
    combo_energy.setComboText(value);
    combo_energy.setComboValue(value);
}

function addOptionOrientationAngle(value) {
    var optionArray = [["90","90"],["0","0"],["-90","-90"],["180","180"]];
    combo_direction.addOption(optionArray);
    combo_direction.setComboText(value);
    combo_direction.setComboValue(value);
}

function addOption(obj, optionData) {
    obj.clearAll();
    var optionArray = [];
    for (var i = 0; i < optionData.length; i++) {
        var array = [];
        array.push(optionData[i], optionData[i]);
        optionArray.push(array);
    }
    obj.addOption(optionArray);
    // 选中第一个
    obj.setComboText(optionData[0]);// for selected option
    obj.setComboValue(optionData[0]);
}

/**
 * 设置位置
 * @param vehicleName 车辆名称
 * @param position 新位置
 * */
function setPosition(position) {
    var url = API.VEHICLE_DRIVE.SET_POSITION;
    var parmas = {"vehicleName": VEHICLE_NAME, "position": position};
    // var HttpKit = new HttpKit();
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####setPosition######: " + JSON.stringify(data));
        if (data.code == "success") {
            dhxGrid.cells(dhxGrid.getSelectedId(), 5).setValue(position);
        }
    });
}

/**
 * 设置状态
 * @param vehicleName 车辆名称
 * @param position 新状态
 * */
function setStauts(state) {
    var url = API.VEHICLE_DRIVE.SET_STATUS;
    var parmas = {"vehicleName": VEHICLE_NAME, "state": state};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####setStauts######: " + JSON.stringify(data));
        if (data.code == "success") {
            dhxGrid.cells(dhxGrid.getSelectedId(), 2).setValue(state);
        }
    });
}

/**
 * 设置方向
 * @param value
 */
function setDirection(value) {
    var url = API.VEHICLE_DRIVE.SET_ORIENTATION;
    var parmas = {"vehicleName": VEHICLE_NAME, "angle": value};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####setDirection######: " +  JSON.stringify(data));
    });
}

/**
 * 设置能量
 * @param energy
 */
function setEnergy(energy) {
    var url = API.VEHICLE_DRIVE.SET_ORIENTATION;
    var parmas = {"vehicleName": VEHICLE_NAME, "level": energy};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####setEnergy######: " +  JSON.stringify(data));
    });
}

/**
 * 车辆暂停
 */
function vehiclePaused(isPaused) {
    var url = API.VEHICLE_DRIVE.VEHICLE_PAUSED;
    var parmas = {"vehicleName": VEHICLE_NAME, "paused": isPaused};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####vehiclePaused######: " +  JSON.stringify(data));
    });
}

/**
 * 自动/手动模式
 * @param model 为true时为手动模式
 */
function setModel(model) {
    var url = API.VEHICLE_DRIVE.SET_MODE;
    var parmas = {"vehicleName": VEHICLE_NAME , "isEnabled": model};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####setModel######: " +  JSON.stringify(data));
    });
}

/**
 * 下一步按钮
 * @param model 为true时为手动模式
 */
function nextButton() {
    var url = API.VEHICLE_DRIVE.NEXT_BUTTON;
    var parmas = {"vehicleName": VEHICLE_NAME };
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####nextButton######: " + JSON.stringify(data));
    });
}

/**
 * 重发协议指令
 */
function continueVehicleMove() {
    var url = API.VEHICLE_DRIVE.CONTINUE_MOVE;
    var parmas = {"vehicleName": VEHICLE_NAME};
    new HttpKit().url(url).params(parmas).get(function (data) {
        console.log("#####continueVehicleMove######: " + JSON.stringify(data));
    });
}

/**
 * 启用适配器
 */
function enadleAdapter() {
    var isEnable = $("#adapterEnabled").prop("checked");
    console.log(isEnable)
    var url = API.VEHICLE_DRIVE.ENABLE_ADAPTER;
    var parmas = {"vehicleName": VEHICLE_NAME, "isEnable": isEnable};
    new HttpKit().url(url).params(parmas).get(function (data) {
        var cell = dhxGrid.cells(dhxGrid.getSelectedId(), 4);
        if(data.code == "success") {
            if(cell.getValue() == 0) {
                cell.setValue(1);
            } else {
                cell.setValue(0);
            }
        }
        // console.log(isChecked + "#############:" + JSON.stringify(data));
    });
}


