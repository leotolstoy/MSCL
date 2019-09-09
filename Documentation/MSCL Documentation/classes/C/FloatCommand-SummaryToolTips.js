NDSummary.OnToolTipsLoaded("CClass:FloatCommand",{666:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype666\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">FloatCommand</div></div></div><div class=\"TTSummary\">A generic command class that contains the logic for any command that deals only with one or more floats.</div></div>",668:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype668\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> commandName() <span class=\"SHKeyword\">const</span></div></div>",669:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype669\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FloatCommand MakeSetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td></td><td class=\"PName last\">cmd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">float</span>&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">data</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype670\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> FloatCommand MakeGetCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">MipTypes::</td><td class=\"PType\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parameter: cmd The specific MipTypes::Command type to be constructed</div></div>",671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype671\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; getResponseData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">GenericMipCmdResponse&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",672:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype672\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">operator</span> ByteStream() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Converts this class to a ByteStream.</div></div>",673:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Private constructor creates a FloatCommand object.&nbsp; Use Make___Command methods to create an object.</div></div>",674:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype674\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> MipTypes::Command commandType() <span class=\"SHKeyword\">const</span></div></div>",675:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype675\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual uint8</span> fieldDataByte() <span class=\"SHKeyword\">const</span></div></div>",676:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype676\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual bool</span> responseExpected() <span class=\"SHKeyword\">const</span></div></div>",678:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype678\" class=\"NDPrototype NoParameterForm\">MipTypes::Command m_cmd</div><div class=\"TTSummary\">The specific MipTypes::Command type of this object</div></div>",679:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype679\" class=\"NDPrototype NoParameterForm\">MipTypes::FunctionSelector m_functionSelector</div><div class=\"TTSummary\">The FunctionSelector type of command to send, get/set, reset to factory defaults, et al.</div></div>",680:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype680\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">float</span>&gt; m_data</div><div class=\"TTSummary\">The float data to send to the device.</div></div>"});