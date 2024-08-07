class Device{
    
        fld_Id = null;
        fld_Active = true;
        fld_Deleted = false;
        fld_RecordUserId = -1;
        fld_RecordDateTime = new Date();
        fld_UpdateUserId = -1;
        fld_UpdateDateTime = new Date();
        fld_FirmId = -1;
        fld_DeviceName = '';
        fld_Description = '';
        fld_DeviceSerialNr = 0;
        fld_DeviceModelTypeId = 0;
        fld_AccessPointId = 0;
        fld_DeviceOrganizationId = -1;
        fld_DeviceModelId = 0;
        fld_DeviceCategoryId = null;
        fld_DeviceSlaveId = 1;
        fld_DeviceTimezoneId = 0;
        fld_Latitude = null;
        fld_Longitude = null;
        fld_DeviceDaylight = false;
        fld_LocationName = '';

}

module.exports=Device;