NDFramePage.OnPageTitleLoaded("File:MicroStrain/Wireless/Configuration/NodeEepromHelper.h","NodeEepromHelper.h");NDSummary.OnSummaryLoaded("File:MicroStrain/Wireless/Configuration/NodeEepromHelper.h",[["C/C++","C"]],[["Classes","Class"],["Constants","Constant"],["Functions","Function"],["Groups","Group"],["Variables","Variable"]],[[3932,0,0,"NodeEepromHelper","NodeEepromHelper"],[3933,0,3,"Constants","NodeEepromHelper.Constants"],[3934,0,1,"Eeprom Limits","NodeEepromHelper.Eeprom_Limits"],[3935,0,1,,"NodeEepromHelper.TIME_BETWEEN_BURSTS_MAX_SECS"],[3936,0,1,,"NodeEepromHelper.BYTES_PER_DATALOG_PAGE"],[3937,0,1,,"NodeEepromHelper.MIN_SLEEP_INTERVAL_EEVAL"],[3938,0,1,,"NodeEepromHelper.MAX_SLEEP_INTERVAL_EEVAL"],[3939,0,1,,"NodeEepromHelper.MIN_LOST_BEACON_TIMEOUT"],[3940,0,1,,"NodeEepromHelper.MAX_LOST_BEACON_TIMEOUT"],[3941,0,1,,"NodeEepromHelper.LOST_BEACON_TIMEOUT_DISABLED"],[3942,0,3,"Functions","NodeEepromHelper.Functions"],[3943,0,2,"NodeEepromHelper","NodeEepromHelper.NodeEepromHelper"],[3944,0,3,"Variables","NodeEepromHelper.Variables"],[3945,0,4,"m_node","NodeEepromHelper.m_node"],[3946,0,3,"Functions","NodeEepromHelper.Functions(2)"],[3947,0,2,"read","NodeEepromHelper.read"],[3948,0,2,"write","NodeEepromHelper.write"],[3949,0,2,"findDerivedChannelEeprom","NodeEepromHelper.findDerivedChannelEeprom"],[3950,0,2,"nodeAddress","NodeEepromHelper.nodeAddress"],[3951,0,2,"applyEepromChanges","NodeEepromHelper.applyEepromChanges"],[3952,0,2,"read_frequency","NodeEepromHelper.read_frequency"],[3953,0,2,"read_regionCode","NodeEepromHelper.read_regionCode"],[3954,0,2,"read_fwVersion","NodeEepromHelper.read_fwVersion"],[3955,0,2,"read_asppVersion","NodeEepromHelper.read_asppVersion"],[3956,0,2,"read_commProtocol","NodeEepromHelper.read_commProtocol"],[3957,0,2,"write_commProtocol","NodeEepromHelper.write_commProtocol"],[3958,0,2,"read_model","NodeEepromHelper.read_model"],[3959,0,2,"read_serial","NodeEepromHelper.read_serial"],[3960,0,2,"read_microcontroller","NodeEepromHelper.read_microcontroller"],[3961,0,2,"read_radioFeatures","NodeEepromHelper.read_radioFeatures"],[3962,0,2,"read_dataStorageSize","NodeEepromHelper.read_dataStorageSize"],[3963,0,2,"read_flashInfo","NodeEepromHelper.read_flashInfo"],[3964,0,2,"read_filter1","NodeEepromHelper.read_filter1"],[3965,0,2,"read_filter2","NodeEepromHelper.read_filter2"],[3966,0,2,"write_channelMask","NodeEepromHelper.write_channelMask"],[3967,0,2,"read_channelMask","NodeEepromHelper.read_channelMask"],[3968,0,2,"write_numSweeps","NodeEepromHelper.write_numSweeps"],[3969,0,2,"read_numSweeps","NodeEepromHelper.read_numSweeps"],[3970,0,2,"write_unlimitedDuration","NodeEepromHelper.write_unlimitedDuration"],[3971,0,2,"read_unlimitedDuration","NodeEepromHelper.read_unlimitedDuration"],[3972,0,2,"write_sampleRate","NodeEepromHelper.write_sampleRate"],[3973,0,2,"read_sampleRate","NodeEepromHelper.read_sampleRate"],[3974,0,2,"write_dataFormat","NodeEepromHelper.write_dataFormat"],[3975,0,2,"read_dataFormat","NodeEepromHelper.read_dataFormat"],[3976,0,2,"write_collectionMode","NodeEepromHelper.write_collectionMode"],[3977,0,2,"read_collectionMode","NodeEepromHelper.read_collectionMode"],[3978,0,2,"write_syncSamplingMode","NodeEepromHelper.write_syncSamplingMode"],[3979,0,2,"read_syncSamplingMode","NodeEepromHelper.read_syncSamplingMode"],[3980,0,2,"write_sensorDelay","NodeEepromHelper.write_sensorDelay"],[3981,0,2,"read_sensorDelay","NodeEepromHelper.read_sensorDelay"],[3982,0,2,"write_retransmission","NodeEepromHelper.write_retransmission"],[3983,0,2,"read_retransmission","NodeEepromHelper.read_retransmission"],[3984,0,2,"write_settlingTime","NodeEepromHelper.write_settlingTime"],[3985,0,2,"read_settlingTime","NodeEepromHelper.read_settlingTime"],[3986,0,2,"write_timeBetweenBursts","NodeEepromHelper.write_timeBetweenBursts"],[3987,0,2,"read_timeBetweenBursts","NodeEepromHelper.read_timeBetweenBursts"],[3988,0,2,"write_samplingMode","NodeEepromHelper.write_samplingMode"],[3989,0,2,"read_samplingMode","NodeEepromHelper.read_samplingMode"],[3990,0,2,"write_channelLinearEquation","NodeEepromHelper.write_channelLinearEquation"],[3991,0,2,"read_channelLinearEquation()","NodeEepromHelper.read_channelLinearEquation"],[3992,0,2,"write_channelUnit","NodeEepromHelper.write_channelUnit"],[3993,0,2,"write_channelEquation","NodeEepromHelper.write_channelEquation"],[3994,0,2,"write_channelUnitAndEquation","NodeEepromHelper.write_channelUnitAndEquation"],[3995,0,2,"read_channelUnit","NodeEepromHelper.read_channelUnit"],[3996,0,2,"read_channelEquation","NodeEepromHelper.read_channelEquation"],[3997,0,2,"read_transmitPower","NodeEepromHelper.read_transmitPower"],[3998,0,2,"write_transmitPower","NodeEepromHelper.write_transmitPower"],[3999,0,2,"read_inactivityTimeout","NodeEepromHelper.read_inactivityTimeout"],[4000,0,2,"write_inactivityTimeout","NodeEepromHelper.write_inactivityTimeout"],[4001,0,2,"read_checkRadioInterval","NodeEepromHelper.read_checkRadioInterval"],[4002,0,2,"write_checkRadioInterval","NodeEepromHelper.write_checkRadioInterval"],[4003,0,2,"read_defaultMode","NodeEepromHelper.read_defaultMode"],[4004,0,2,"write_defaultMode","NodeEepromHelper.write_defaultMode"],[4005,0,2,"read_logPage","NodeEepromHelper.read_logPage"],[4006,0,2,"read_logPageOffset","NodeEepromHelper.read_logPageOffset"],[4007,0,2,"read_numDatalogSessions","NodeEepromHelper.read_numDatalogSessions"],[4008,0,2,"write_txPerGroup","NodeEepromHelper.write_txPerGroup"],[4009,0,2,"write_groupSize","NodeEepromHelper.write_groupSize"],[4010,0,2,"write_tdmaAddress","NodeEepromHelper.write_tdmaAddress"],[4011,0,2,"write_maxRetransPerBurst","NodeEepromHelper.write_maxRetransPerBurst"],[4012,0,2,"read_gaugeResistance","NodeEepromHelper.read_gaugeResistance"],[4013,0,2,"write_gaugeResistance","NodeEepromHelper.write_gaugeResistance"],[4014,0,2,"read_numActiveGauges","NodeEepromHelper.read_numActiveGauges"],[4015,0,2,"write_numActiveGauges","NodeEepromHelper.write_numActiveGauges"],[4016,0,2,"read_lowBatteryThreshold","NodeEepromHelper.read_lowBatteryThreshold"],[4017,0,2,"write_lowBatteryThreshold","NodeEepromHelper.write_lowBatteryThreshold"],[4018,0,2,"read_inputRange","NodeEepromHelper.read_inputRange"],[4019,0,2,"write_inputRange","NodeEepromHelper.write_inputRange"],[4020,0,2,"write_inputRange","NodeEepromHelper.write_inputRange(2)"],[4021,0,2,"read_hardwareOffset","NodeEepromHelper.read_hardwareOffset"],[4022,0,2,"write_hardwareOffset","NodeEepromHelper.write_hardwareOffset"],[4023,0,2,"read_antiAliasingFilter","NodeEepromHelper.read_antiAliasingFilter"],[4024,0,2,"write_antiAliasingFilter","NodeEepromHelper.write_antiAliasingFilter"],[4025,0,2,"read_lowPassFilter","NodeEepromHelper.read_lowPassFilter"],[4026,0,2,"write_lowPassFilter","NodeEepromHelper.write_lowPassFilter"],[4027,0,2,"read_highPassFilter","NodeEepromHelper.read_highPassFilter"],[4028,0,2,"write_highPassFilter","NodeEepromHelper.write_highPassFilter"],[4029,0,2,"read_gaugeFactor","NodeEepromHelper.read_gaugeFactor"],[4030,0,2,"write_gaugeFactor","NodeEepromHelper.write_gaugeFactor"],[4031,0,2,"read_thermoType","NodeEepromHelper.read_thermoType"],[4032,0,2,"write_thermoType","NodeEepromHelper.write_thermoType"],[4033,0,2,"read_tempSensorOptions","NodeEepromHelper.read_tempSensorOptions"],[4034,0,2,"write_tempSensorOptions","NodeEepromHelper.write_tempSensorOptions"],[4035,0,2,"read_excitationVoltage","NodeEepromHelper.read_excitationVoltage"],[4036,0,2,"write_excitationVoltage","NodeEepromHelper.write_excitationVoltage"],[4037,0,2,"read_debounceFilter","NodeEepromHelper.read_debounceFilter"],[4038,0,2,"write_debounceFilter","NodeEepromHelper.write_debounceFilter"],[4039,0,2,"read_pullUpResistor","NodeEepromHelper.read_pullUpResistor"],[4040,0,2,"write_pullUpResistor","NodeEepromHelper.write_pullUpResistor"],[4041,0,2,"read_sensorMode","NodeEepromHelper.read_sensorMode"],[4042,0,2,"write_sensorMode","NodeEepromHelper.write_sensorMode"],[4043,0,2,"read_activitySense","NodeEepromHelper.read_activitySense"],[4044,0,2,"write_activitySense","NodeEepromHelper.write_activitySense"],[4045,0,2,"read_fatigueMode","NodeEepromHelper.read_fatigueMode"],[4046,0,2,"read_fatigueOptions","NodeEepromHelper.read_fatigueOptions"],[4047,0,2,"write_fatigueOptions","NodeEepromHelper.write_fatigueOptions"],[4048,0,2,"read_histogramOptions","NodeEepromHelper.read_histogramOptions"],[4049,0,2,"write_histogramOptions","NodeEepromHelper.write_histogramOptions"],[4050,0,2,"read_eventTriggerOptions","NodeEepromHelper.read_eventTriggerOptions"],[4051,0,2,"write_eventTriggerOptions","NodeEepromHelper.write_eventTriggerOptions"],[4052,0,2,"read_eventTriggerDurations","NodeEepromHelper.read_eventTriggerDurations"],[4053,0,2,"read_eventTriggerMask","NodeEepromHelper.read_eventTriggerMask"],[4054,0,2,"clearHistogram","NodeEepromHelper.clearHistogram"],[4055,0,2,"read_lostBeaconTimeout","NodeEepromHelper.read_lostBeaconTimeout"],[4056,0,2,"write_lostBeaconTimeout","NodeEepromHelper.write_lostBeaconTimeout"],[4057,0,2,"read_diagnosticInterval","NodeEepromHelper.read_diagnosticInterval"],[4058,0,2,"write_diagnosticInterval","NodeEepromHelper.write_diagnosticInterval"],[4059,0,2,"read_storageLimitMode","NodeEepromHelper.read_storageLimitMode"],[4060,0,2,"write_storageLimitMode","NodeEepromHelper.write_storageLimitMode"],[4061,0,2,"read_dataMode","NodeEepromHelper.read_dataMode"],[4062,0,2,"write_dataMode","NodeEepromHelper.write_dataMode"],[4063,0,2,"read_derivedSampleRate","NodeEepromHelper.read_derivedSampleRate"],[4064,0,2,"write_derivedSampleRate","NodeEepromHelper.write_derivedSampleRate"],[4065,0,2,"read_derivedChannelMask","NodeEepromHelper.read_derivedChannelMask"],[4066,0,2,"write_derivedChannelMask","NodeEepromHelper.write_derivedChannelMask"],[4067,0,2,"read_derivedVelocityUnit","NodeEepromHelper.read_derivedVelocityUnit"],[4068,0,2,"write_derivedVelocityUnit","NodeEepromHelper.write_derivedVelocityUnit"]]);