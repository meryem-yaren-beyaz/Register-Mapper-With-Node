class DeviceModel {
    fld_Id = null;
    fld_Active = true;
    fld_Deleted = false;
    fld_RecordUserId = -1;
    fld_RecordDateTime = new Date();
    fld_UpdateUserId = -1;
    fld_UpdateDateTime = new Date();
    fld_FirmId = -1;
    fld_DeviceModelName = '';
    fld_DeviceModelDescription = '';
    fld_DeviceModelTypeId = 0;
    fld_DeviceModelProtocol = 0;
    fld_ProtocolAlgorithm = '';
    fld_StartBaudrate = null;
    fld_StartDataBit = null;
    fld_StartParity = '';
    fld_StartStopBit = null;
    fld_Baudrate = null;
    fld_DataBit = null;
    fld_Parity = '';
    fld_WillTopicAddress = '';
    fld_StopBit = null;
}
module.exports=DeviceModel;