class DeviceCategory {
    fld_Id = null;
    fld_Active = true;
    fld_Deleted = false;
    fld_RecordUserId = -1;
    fld_RecordDateTime = new Date();
    fld_UpdateUserId = -1;
    fld_UpdateDateTime = new Date();
    fld_FirmId = -1;
    fld_CategoryName = '';
    fld_CategoryDescription = '';
}

module.exports=DeviceCategory;