
var HttpKit = function() {
    var url;
    var requestParams;
    var asyncRequest = false;
    this.url = function(target) {
        this.url = target;
        return this;
    },
    this.params = function(params) {
        this.requestParams = params
        return this;
    },
    this.async = function(async) {
        this.asyncRequest = async
        return this;
    },
    this.get = function (successCallback, failCallback) {
        var headers = {};
        $.ajax(this.url,{
            type:"get",
            url:this.url,
            cache: false,
            async: asyncRequest,
            data: this.requestParams,
            dataType: "json",
            contentType: "application/json",
            headers: headers,
            success: function (data) {
                // 执行用户指定请求成功行数
                console.log(successCallback && (successCallback instanceof Function));
                if (successCallback && (successCallback instanceof Function)) {
                    if(data) {
                        successCallback(data);
                        // successCallback(JSON.stringify(data));
                        // successCallback(JSON.stringify(data));
                    }
                }
                return data;
            },
            fail: function (err) {
                console.log(err);
                // 执行用户失败方法
                if (failCallback && failCallback instanceof Function) {
                    failCallback(err);
                }
                return err;
            }
        });
        // $.ajax(this.url, this.requestParams, function (data) {
        //     console.log("###############: " + data)
        //     return data;
        // });
    }
}