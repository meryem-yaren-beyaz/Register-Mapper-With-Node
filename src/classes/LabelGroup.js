class LabelGroup {
  fld_Id = null;
  fld_Active = true;
  fld_Deleted = false;
  fld_RecordUserId = -1;
  fld_RecordDateTime = new Date();
  fld_UpdateUserId = -1;
  fld_UpdateDateTime = new Date();
  fld_FirmId = -1;
  fld_LabelGroupName = "";
  fld_LabelGroupType = 0;
  fld_LabelGroupReadPeriod = 0;
  fld_LabelGroupWritePeriod = 0;
}

module.exports = LabelGroup;
