#INCLUDE 'protheus.ch'
#INCLUDE 'restful.ch'

#DEFINE ALL "02"

WsRestful smartlink Description "Serviços Rest dedicados a integrações padrões TOTVS Saúde Planos" Format APPLICATION_JSON

    WSMETHOD POST user DESCRIPTION "Solicita dados do usuario" ;
    WSsyntax "{version}/user" ;
    PATH "{version}/user" PRODUCES APPLICATION_JSON

End WsRestful

WSMethod POST user WSService smartlink

    local oRequest  := PLSBSWReqSmtLnk():new(self)
    local lResult   := .f.

    if oRequest:valida()
        lResult := oRequest:requestQueue()
    endif

    oRequest:endRequest()

    freeObj(oRequest)
    oRequest := nil    

    delClassIntf()

return lResult
