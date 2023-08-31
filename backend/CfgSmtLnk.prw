#include "TOTVS.CH"

Class CfgSmtLnk

	Data oConfig

	method new()
	method setCfgRequest()
	method setCfgResp()
	method newTokenRac()
	Method getId()
	Method getSecret()
	Method getIdTenant()
	Method getMsgId()
	Method getType()
EndClass

Method new() Class CfgSmtLnk
	self:oConfig := JsonObject():New()
Return self

Method setCfgRequest() Class CfgSmtLnk
    FwTFDefault()
	
	self:oConfig[ "msgId" ]      := self:getMsgId()
	self:oConfig[ "platform-clientId"] := "8ccda866421948588b7d2fafa61576df"
	self:oConfig[ "platform-secret"] := "967846bc24f14a6a975180744256c837"
	self:oConfig[ "platform-tenantId"] := "a81fc575-ddb7-4fd0-b194-b7c5c9a5c210"
	self:oConfig[ "registry-endpoint"] := "https://endpoint-registry.dev.totvs.app/api/v1/services"
	self:oConfig[ "type"] := "ProtheusValidateLoginRequest"

	FwTFSetConfig( self:oConfig )

Return self:oConfig

Method setCfgResp() Class CfgSmtLnk

    FwTFDefault()

	self:oConfig := JsonObject():New()
	self:oConfig[ "msgId" ]      := self:getMsgId()
	self:oConfig[ "platform-clientId"] := "e44da3f784004edc805bba53eaa4586d"
	self:oConfig[ "platform-secret"] := "452eb705fbab4d29954c2f811e3dad09"
	self:oConfig[ "platform-tenantId"] := "a81fc575-ddb7-4fd0-b194-b7c5c9a5c210"
	self:oConfig[ "registry-endpoint"] := "https://endpoint-registry.dev.totvs.app/api/v1/services"
	self:oConfig["type"] := "ProtheusValidateLoginResponse"

	FwTFSetConfig( self:oConfig )

Return

Method newTokenRac() Class CfgSmtLnk
	FwTotvsAppsConfiguration():getRACToken(self:getId(),self:getSecret(),.T.)
Return

Method getId() Class CfgSmtLnk
return self:oConfig[ "platform-clientId"]

Method getSecret() Class CfgSmtLnk
return self:oConfig[ "platform-secret"]

Method getIdTenant() Class CfgSmtLnk
return self:oConfig[ "platform-tenantId"]

Method getType() Class CfgSmtLnk
return self:oConfig["type"]

Method getMsgId() Class CfgSmtLnk
	if (type("cCurrentUUID") == "U" .or. empty(cCurrentUUID))
        cCurrentUUID := FWUUIDV4(.T.)
    endif
return cCurrentUUID

