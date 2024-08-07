class Label {
  fld_Id = null;
  fld_Active = true;
  fld_Deleted = false;
  fld_RecordUserId = -1;
  fld_RecordDateTime = new Date();
  fld_UpdateUserId = -1;
  fld_UpdateDateTime = new Date();
  fld_FirmId = -1;
  fld_LabelName = "";
  fld_LabelGroupId = 0;
  fld_LabelDataTypeId = 0;
  fld_AlarmDefinitionFlag = true;
  fld_HasFlagValue = false;
}

module.exports = Label;
