package com.openagv.console.controller;

import com.duangframework.mvc.annotation.Controller;
import com.duangframework.mvc.annotation.Import;
import com.duangframework.mvc.annotation.Mapping;
import com.duangframework.mvc.core.BaseController;
import com.openagv.console.service.LogService;

@Controller
@Mapping(value = "/log", desc = "日志管理")
public class LogController extends BaseController {

    @Import
    private LogService logService;

    private void index() {
        returnXml(logService.index());
    }

}
