NDContentPage.OnToolTipsLoaded({3161:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3161\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TempSensorOptions</div></div></div><div class=\"TTSummary\">Options to adjust the temperature sensor for a WirelessNode.</div></div>",3229:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3229\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">HistogramOptions</div></div></div><div class=\"TTSummary\">Contains all of the Histogram options that can be configured for a WirelessNode.</div></div>",3515:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3515\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">EventTriggerOptions</div></div></div><div class=\"TTSummary\">Contains all of the Event Trigger options that can be configured for a WirelessNode.</div></div>",3549:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3549\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FatigueOptions</div></div></div><div class=\"TTSummary\">Contains all of the fatigue options that can be configured for a WirelessNode.</div></div>",3605:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3605\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataModeMask</div></div></div><div class=\"TTSummary\">Helper class for the DataMode bitmask used in Node Eeproms.</div></div>",3808:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3808\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataMode dataMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataMode currently set in this Config object.</div></div>",3851:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3851\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",3853:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Configuration Options for Wireless Nodes and BaseStations that can be issues.</div></div>",3932:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3932\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeEepromHelper</div></div></div><div class=\"TTSummary\">A helper class for reading and writing to a Wireless Node\'s Eeprom.&nbsp; This class provides eeprom specific parsing so that high-level objects can be converted to their low-level eeprom value equivelent and vice-versa.</div></div>",4116:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4116\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ActivitySense</div></div></div><div class=\"TTSummary\">Contains all of the ActivitySense options that can be configured for a WirelessNode.&nbsp; Activity Sense is a power saving feature that allows a Node to be in a low-power state when no activity is suspected, and then immediately jump to its normal sampling state when a certain activity threshold is reached.</div></div>",4273:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4273\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelGroup</div></div></div><div class=\"TTSummary\">Represents a group of channels that have combined settings.</div></div>",4538:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4538\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a WirelessNode.</div></div>",4552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4552\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> normalizeNumSweeps(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">sweeps</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes the number of sweeps so that it is within range and a multiple of 100 (rounds up to next multiple).</div></div>",4553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">TimeSpan normalizeTimeBetweenBursts(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">TimeSpan&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">time</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Normalizes a TimeSpan so that it is within an acceptable range for setting the timeBetweenBursts.&nbsp; A valid range is between 1 second and 24 hours. Seconds above 32767 will be rounded to minutes.&nbsp; When setting the time between bursts, you should also call minTimeBetweenBursts and verify it is greater than this.</div></div>",4625:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4625\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> minLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the minimum lost beacon timeout (in minutes) that is supported.&nbsp; Note: A value of 0 disable the lost beacon timeout.</div></div>",4626:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4626\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint16</span> maxLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the maximum lost beacon timeout (in minutes) that is supported.</div></div>",5621:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype5621\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",5674:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype5674\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.&nbsp; Note: This applies all options that have been set in the WirelessNodeConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",5796:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data collection methods that can be performed on the Node.</div></div>",5816:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of data formats that Nodes can be configured to send when sampling.</div></div>",5826:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of sampling modes the Node can be in.</div></div>",5833:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of default modes the Node can have.&nbsp; This is the mode the Node starts in, as well as the mode the node goes into after an inactivity timeout.</div></div>",5857:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",5877:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the equation types that can be used for calibration coefficients on Wireless Nodes.</div></div>",5880:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the unit types that can be used for calibration coefficients on Wireless Nodes.</div></div>",6001:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the settling times used for thermocouple and voltage inputs on some Wireless Nodes.</div></div>",6018:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the thermocouple types supported by some Wireless Nodes.</div></div>",6049:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible sample rates that are available for Wireless Nodes.</div></div>",6114:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The possible settings for ChannelGroups.</div></div>",6158:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The different modes a Fatigue Node can operate in.</div></div>",6165:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The filter options (used for anti-aliasing and low-pass filter)</div></div>",6202:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The high pass filter options.</div></div>",6205:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for configuring what happens when the storage limit is reached when logging to a Node.</div></div>",6208:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options available for input range on supported Nodes.</div></div>",6343:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Data Modes.</div></div>",6348:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Derived Channel Categories for configuration.</div></div>",6361:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The options that can be configured for the velocity derived channel.</div></div>",6362:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Communication Protocol types.</div></div>",6365:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Voltages.</div></div>",6375:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Available Sensor Output Modes.</div></div>",6387:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a map of &lt;DerivedChannelOption&gt; to ChannelMask pairs.</div></div>",6664:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype6664\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ChannelMask</div></div></div><div class=\"TTSummary\">Represents the channel mask (active and inactive channels) for a WirelessNode.</div></div>",7049:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7049\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">LinearEquation</div></div></div><div class=\"TTSummary\">Represents a linear equation (y = mx + b).</div></div>",7451:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7451\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">TimeSpan</div></div></div><div class=\"TTSummary\">Represents a range of time</div></div>",7561:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7561\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",7576:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7576\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NodeCommunication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a WirelessNode.</div></div>",7583:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7583\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",7615:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7615\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidNodeConfig</div></div></div><div class=\"TTSummary\">The Configuration for a WirelessNode is invalid.</div></div>",7621:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype7621\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BitMask</div></div></div><div class=\"TTSummary\">Represents a bitmask.</div></div>"});