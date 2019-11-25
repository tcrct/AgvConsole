//v.3.6 build 130417

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
dhtmlXForm.prototype.saveBackup=function(){if(!this._backup)this._backup={},this._backupId=(new Date).getTime();this._backup[++this._backupId]=this.getFormData();return this._backupId};dhtmlXForm.prototype.restoreBackup=function(a){this._backup!=null&&this._backup[a]!=null&&this.setFormData(this._backup[a])};dhtmlXForm.prototype.clearBackup=function(a){this._backup!=null&&this._backup[a]!=null&&(this._backup[a]=null,delete this._backup[a])};

//v.3.6 build 130417

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/