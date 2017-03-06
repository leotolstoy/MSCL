NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialFieldParser_Sensor.h",{591:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype591\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawAccelVector</div></div></div><div class=\"TTSummary\">The Field Parser for raw accelerometer data</div></div>",593:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype593\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> parse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">InertialDataPoints&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div><div class=\"TTSummary\">Parses an InertialDataField for InertialDataPoints and stores them in the valid or invalid result vectors</div></div>",594:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">static bool</span> registerParser()</div><div class=\"TTSummary\">The static function that registers this parser with the list of parsers (called immediately)</div></div>",596:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The 2-byte field type (Descriptor ID + Field ID) for this parser</div></div>",597:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">Whether this parser is registered. This will always be true. This is used to call registerParser() immediately</div></div>",598:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype598\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawGyroVector</div></div></div><div class=\"TTSummary\">The field parser for raw gyro data</div></div>",599:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype599\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_RawMagVector</div></div></div><div class=\"TTSummary\">The field parser for raw magnetometer data</div></div>",600:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype600\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAccelVector</div></div></div><div class=\"TTSummary\">The field parser for scaled accelerometer data</div></div>",601:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype601\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledGyroVector</div></div></div><div class=\"TTSummary\">The field parser for scaled gyro data</div></div>",602:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype602\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledMagVector</div></div></div><div class=\"TTSummary\">The field parser for scaled magnetometer data</div></div>",603:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype603\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaThetaVector</div></div></div><div class=\"TTSummary\">The field parser for delta theta data</div></div>",604:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype604\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_DeltaVelocityVector</div></div></div><div class=\"TTSummary\">The field parser for delta velocity data</div></div>",605:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype605\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",606:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype606\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_Quaternion</div></div></div><div class=\"TTSummary\">The field parser for quaternion data</div></div>",607:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype607\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_OrientationUpdateMatrix</div></div></div><div class=\"TTSummary\">The field parser for orientation matrix data</div></div>",608:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype608\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_EulerAngles</div></div></div><div class=\"TTSummary\">The field parser for Euler Angles data</div></div>",609:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype609\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_InternalTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Internal Timestamp data</div></div>",610:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype610\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_BeaconedTimestamp</div></div></div><div class=\"TTSummary\">The field parser for Beaconed Timestamp data</div></div>",614:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype614\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedMagVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Mag Vector (North)</div></div>",615:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype615\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_StabilizedAccelVector</div></div></div><div class=\"TTSummary\">The field parser for Stabilized Accel Vector (Up)</div></div>",616:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype616\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_GpsCorrelationTimestamp</div></div></div><div class=\"TTSummary\">The field parser for GPS Correlation Timestamp</div></div>",620:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype620\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FieldParser_ScaledAmbientPressure</div></div></div><div class=\"TTSummary\">The field parser for Scaled Ambient Pressure.</div></div>"});