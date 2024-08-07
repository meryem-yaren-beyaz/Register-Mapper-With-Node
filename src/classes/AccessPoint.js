class AccessPoint {
  fld_Id = null;
  fld_Active = true;
  fld_Deleted = false;
  fld_RecordUserId = -1;
  fld_RecordDateTime = new Date();
  fld_UpdateUserId = -1;
  fld_UpdateDateTime = new Date();
  fld_FirmId = -1;
  fld_AccessPointName = "";
  fld_Description = "";
  fld_CommunicationType = 0;
  fld_CommunicationMethod = 0;
  fld_ProtocolId = 0;
  fld_AccessPointIp = "";
  fld_AccessPointPort = 502;
  fld_ConfigurationPort = 555;
  fld_AccessPointSerialNr = "10000001";
  fld_AccessPointTimeout = 1000;
  fld_AccessPointQueryRetryCnt = 1;
}

module.exports = AccessPoint;
