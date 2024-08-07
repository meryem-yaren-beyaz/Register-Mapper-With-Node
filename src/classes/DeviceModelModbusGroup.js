class DeviceModelModbusGroup {
  fld_Id = null;
  fld_DeviceModelId = 0;
  fld_DataEditable = 0;
  fld_ReadModbusFunction = -1;
  fld_WriteModbusFunction = -1;
  fld_BeforeProcessAddress = -1;
  fld_BeforeProcessWriteFunction = -1;
  fld_BeforeProcessWriteValue = -1;
  fld_BeforeProcessWriteMinValue = -1;
  fld_BeforeProcessWriteMaxValue = -1;
  fld_AfterProcessAddress = -1;
  fld_AfterProcessWriteFunction = -1;
  fld_AfterProcessWriteValue = -1;
}

module.exports = DeviceModelModbusGroup;
