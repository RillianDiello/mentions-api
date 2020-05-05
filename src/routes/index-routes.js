const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'MentionsAPI',
    version: '1.0.0'
  });
});

router.get('/teknisa', (req, res, next) => {
  res.status(200).send({
    "success": true,
    "message": "A requisição foi realizada com sucesso.",
    "result": {
        "VENDAS": [
            {
                "CDFILIALEXT": "0107",
                "CDCAIXA": "001",
                "NRSEQVENDA": "0000075867",
                "CDCLIENTE": "O00001",
                "CDCONSUMIDOR": "000084161921680144855",
                "CDOPERADOR": "000000099912",
                "DTVENDA": "30/05/2019 17:25",
                "VRTOTVENDA": 28.9,
                "VRDESCVENDA": 0,
                "IDSITUVENDA": "O",
                "IDSTATUSNFCE": "P",
                "NRACESSONFCE": "50190502905110024817650010000000079235831580",
                "NRNOTAFISCALCE": "000000007",
                "DSARQXMLNFCE": "<NFe xmlns=\"http://www.portalfiscal.inf.br/nfe\"><infNFe Id=\"NFe33200315593743000432650010001552489113180574\" versao=\"4.00\"><ide><cUF>33</cUF><cNF>11318057</cNF><natOp>Descricao da Natureza da Operacao: Venda</natOp><mod>65</mod><serie>1</serie><nNF>155248</nNF><dhEmi>2020-03-23T18:01:03-03:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>3303302</cMunFG><tpImp>4</tpImp><tpEmis>9</tpEmis><cDV>4</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>1</indPres><procEmi>0</procEmi><verProc>6.35.xxx</verProc><dhCont>2020-03-23T18:01:03-03:00</dhCont><xJust>Motivo da Emissao em Contigencia: Caixa OffLine</xJust></ide><emit><CNPJ>15593743000432</CNPJ><xNome>TEKNISA SA</xNome><xFant>TEKNISA - 0030</xFant><enderEmit><xLgr>R XV DE NOVEMBRO, 8</xLgr><nro>000</nro><xBairro>CENTRO</xBairro><cMun>3303302</cMun><xMun>NITEROI</xMun><UF>RJ</UF><CEP>24020125</CEP><cPais>1058</cPais><xPais>BRASIL</xPais></enderEmit><IE>79817422</IE><IM>1650159</IM><CNAE>5611203</CNAE><CRT>3</CRT></emit><det nItem=\"1\"><prod><cProd>8510100200</cProd><cEAN>SEM GTIN</cEAN><xProd>GORJETA CONCEDIDA</xProd><NCM>21069090</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>0.9900000000</vUnCom><vProd>0.99</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>0.9900000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS40><orig>0</orig><CST>41</CST></ICMS40></ICMS><PIS><PISNT><CST>07</CST></PISNT></PIS><COFINS><COFINSNT><CST>07</CST></COFINSNT></COFINS></imposto></det><det nItem=\"2\"><prod><cProd>8011102200</cProd><cEAN>SEM GTIN</cEAN><xProd>SUCO MELANC C/ABAC</xProd><NCM>20098990</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>9.9000000000</vUnCom><vProd>9.90</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>9.9000000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS00><orig>0</orig><CST>00</CST><modBC>3</modBC><vBC>9.90</vBC><pICMS>18.00</pICMS><vICMS>1.78</vICMS></ICMS00></ICMS><PIS><PISAliq><CST>01</CST><vBC>9.90</vBC><pPIS>1.65</pPIS><vPIS>0.16</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>9.90</vBC><pCOFINS>7.60</pCOFINS><vCOFINS>0.75</vCOFINS></COFINSAliq></COFINS></imposto></det><total><ICMSTot><vBC>9.90</vBC><vICMS>1.78</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>10.89</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.16</vPIS><vCOFINS>0.75</vCOFINS><vOutro>0.00</vOutro><vNF>10.89</vNF><vTotTrib>2.34</vTotTrib></ICMSTot></total><transp><modFrete>9</modFrete></transp><pag><detPag><tPag>01</tPag><vPag>10.89</vPag></detPag><vTroco>0.00</vTroco></pag><infAdic><infCpl>NFCe EMITIDA EM CONTIGENCIA - PROCOM RJ - FONE 151 - Av. Rio Branco, 25 - Centro, Rio de Janeiro - RJ, 20.090-030 (LEI 5.817/2010)</infCpl><obsCont xCampo=\"NrSeqVen-IdOrigemVen\"><xTexto>0030-001-0000000031-CMD_FOS</xTexto></obsCont></infAdic></infNFe></NFe>\r\n",
                "ITENS": [
                    {
                        "NRSEQUITVEND": "001",
                        "CDPRODUTO": "9200103600",
                        "QTPRODVEND": 1,
                        "VRUNITVEND": 4,
                        "VRTOTAL": 4,
                        "IMPOSTOS": [
                            {
                                "CDIMPOSTO": "99",
                                "VRPEALPRODIT": 0,
                                "VRIMPOPRODIT": 0,
                                "CDCSTPRODI": "00",
                                "CDCSTPRODPC": "01",
                                "CDCFOPPROD": "5102",
                                "VRPERCOFINS": 7.6,
                                "VRPERPIS": 1.65,
                                "VRBASECALCREDUZ": 0,
                                "VRIMPOPRODREDUZ": 0,
                                "VRBASECALCICMS": 4.82,
                                "VRBCREDUZICMS": 0,
                                "VRPRBCREDUICMS": 0,
                                "VRIMPPIS": 0.08,
                                "VRIMPCOFINS": 0.37,
                                "VRTOTTRIBIBPT": 9.99
                            }
                        ]
                    },
                    {
                        "NRSEQUITVEND": "002",
                        "CDPRODUTO": "9351002400",
                        "QTPRODVEND": 1,
                        "VRUNITVEND": 20,
                        "VRTOTAL": 20,
                        "IMPOSTOS": [
                            {
                                "CDIMPOSTO": "99",
                                "VRPEALPRODIT": 0,
                                "VRIMPOPRODIT": 0,
                                "CDCSTPRODI": "00",
                                "CDCSTPRODPC": "01",
                                "CDCFOPPROD": "5102",
                                "VRPERCOFINS": 7.6,
                                "VRPERPIS": 1.65,
                                "VRBASECALCREDUZ": 0,
                                "VRIMPOPRODREDUZ": 0,
                                "VRBASECALCICMS": 24.08,
                                "VRBCREDUZICMS": 0,
                                "VRPRBCREDUICMS": 0,
                                "VRIMPPIS": 0.4,
                                "VRIMPCOFINS": 1.83,
                                "VRTOTTRIBIBPT": 9.99
                            }
                        ]
                    }
                ],
                "PAGAMENTOS": [
                    {
                        "NRSEQUMOVI": "0000000008",
                        "CDTIPORECE": "027",
                        "IDTIPOMOVIVE": "E",
                        "VRMOVIVEND": 28.9,
                        "CDNSUTEF": null
                    }
                ]
            },
            {
                "CDFILIALEXT": "0107",
                "CDCAIXA": "001",
                "NRSEQVENDA": "0000075862",
                "CDCLIENTE": "O00001",
                "CDCONSUMIDOR": "000084161921680144855",
                "CDOPERADOR": "000000099912",
                "DTVENDA": "30/05/2019 16:52",
                "VRTOTVENDA": 24.9,
                "VRDESCVENDA": 0,
                "IDSITUVENDA": "O",
                "IDSTATUSNFCE": "P",
                "NRACESSONFCE": "50190502905110024817650010000000029299281569",
                "NRNOTAFISCALCE": "000000002",
                "DSARQXMLNFCE": "<NFe xmlns=\"http://www.portalfiscal.inf.br/nfe\"><infNFe Id=\"NFe33200315593743000432650010001552489113180574\" versao=\"4.00\"><ide><cUF>33</cUF><cNF>11318057</cNF><natOp>Descricao da Natureza da Operacao: Venda</natOp><mod>65</mod><serie>1</serie><nNF>155248</nNF><dhEmi>2020-03-23T18:01:03-03:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>3303302</cMunFG><tpImp>4</tpImp><tpEmis>9</tpEmis><cDV>4</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>1</indPres><procEmi>0</procEmi><verProc>6.35.xxx</verProc><dhCont>2020-03-23T18:01:03-03:00</dhCont><xJust>Motivo da Emissao em Contigencia: Caixa OffLine</xJust></ide><emit><CNPJ>15593743000432</CNPJ><xNome>TEKNISA SA</xNome><xFant>TEKNISA - 0030</xFant><enderEmit><xLgr>R XV DE NOVEMBRO, 8</xLgr><nro>000</nro><xBairro>CENTRO</xBairro><cMun>3303302</cMun><xMun>NITEROI</xMun><UF>RJ</UF><CEP>24020125</CEP><cPais>1058</cPais><xPais>BRASIL</xPais></enderEmit><IE>79817422</IE><IM>1650159</IM><CNAE>5611203</CNAE><CRT>3</CRT></emit><det nItem=\"1\"><prod><cProd>8510100200</cProd><cEAN>SEM GTIN</cEAN><xProd>GORJETA CONCEDIDA</xProd><NCM>21069090</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>0.9900000000</vUnCom><vProd>0.99</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>0.9900000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS40><orig>0</orig><CST>41</CST></ICMS40></ICMS><PIS><PISNT><CST>07</CST></PISNT></PIS><COFINS><COFINSNT><CST>07</CST></COFINSNT></COFINS></imposto></det><det nItem=\"2\"><prod><cProd>8011102200</cProd><cEAN>SEM GTIN</cEAN><xProd>SUCO MELANC C/ABAC</xProd><NCM>20098990</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>9.9000000000</vUnCom><vProd>9.90</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>9.9000000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS00><orig>0</orig><CST>00</CST><modBC>3</modBC><vBC>9.90</vBC><pICMS>18.00</pICMS><vICMS>1.78</vICMS></ICMS00></ICMS><PIS><PISAliq><CST>01</CST><vBC>9.90</vBC><pPIS>1.65</pPIS><vPIS>0.16</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>9.90</vBC><pCOFINS>7.60</pCOFINS><vCOFINS>0.75</vCOFINS></COFINSAliq></COFINS></imposto></det><total><ICMSTot><vBC>9.90</vBC><vICMS>1.78</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>10.89</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.16</vPIS><vCOFINS>0.75</vCOFINS><vOutro>0.00</vOutro><vNF>10.89</vNF><vTotTrib>2.34</vTotTrib></ICMSTot></total><transp><modFrete>9</modFrete></transp><pag><detPag><tPag>01</tPag><vPag>10.89</vPag></detPag><vTroco>0.00</vTroco></pag><infAdic><infCpl>NFCe EMITIDA EM CONTIGENCIA - PROCOM RJ - FONE 151 - Av. Rio Branco, 25 - Centro, Rio de Janeiro - RJ, 20.090-030 (LEI 5.817/2010)</infCpl><obsCont xCampo=\"NrSeqVen-IdOrigemVen\"><xTexto>0030-001-0000000031-CMD_FOS</xTexto></obsCont></infAdic></infNFe></NFe>\r\n",
                "ITENS": [
                    {
                        "NRSEQUITVEND": "001",
                        "CDPRODUTO": "9351002400",
                        "QTPRODVEND": 1,
                        "VRUNITVEND": 20,
                        "VRTOTAL": 20,
                        "IMPOSTOS": [
                            {
                                "CDIMPOSTO": "99",
                                "VRPEALPRODIT": 0,
                                "VRIMPOPRODIT": 0,
                                "CDCSTPRODI": "00",
                                "CDCSTPRODPC": "01",
                                "CDCFOPPROD": "5102",
                                "VRPERCOFINS": 7.6,
                                "VRPERPIS": 1.65,
                                "VRBASECALCREDUZ": 0,
                                "VRIMPOPRODREDUZ": 0,
                                "VRBASECALCICMS": 24.9,
                                "VRBCREDUZICMS": 0,
                                "VRPRBCREDUICMS": 0,
                                "VRIMPPIS": 0.41,
                                "VRIMPCOFINS": 1.89,
                                "VRTOTTRIBIBPT": 8.61
                            }
                        ]
                    }
                ],
                "PAGAMENTOS": [
                    {
                        "NRSEQUMOVI": "0000000003",
                        "CDTIPORECE": "027",
                        "IDTIPOMOVIVE": "E",
                        "VRMOVIVEND": 24.9,
                        "CDNSUTEF": null
                    }
                ]
            },
            {
                "CDFILIALEXT": "0107",
                "CDCAIXA": "001",
                "NRSEQVENDA": "0000075861",
                "CDCLIENTE": "O00001",
                "CDCONSUMIDOR": "000000000000046685",
                "CDOPERADOR": "000000000999",
                "DTVENDA": "30/05/2019 16:21",
                "VRTOTVENDA": 16.9,
                "VRDESCVENDA": 0,
                "IDSITUVENDA": "O",
                "IDSTATUSNFCE": "P",
                "NRACESSONFCE": "50190502905110024817650010000000019660664378",
                "NRNOTAFISCALCE": "000000001",
                "DSARQXMLNFCE": "<NFe xmlns=\"http://www.portalfiscal.inf.br/nfe\"><infNFe Id=\"NFe33200315593743000432650010001552489113180574\" versao=\"4.00\"><ide><cUF>33</cUF><cNF>11318057</cNF><natOp>Descricao da Natureza da Operacao: Venda</natOp><mod>65</mod><serie>1</serie><nNF>155248</nNF><dhEmi>2020-03-23T18:01:03-03:00</dhEmi><tpNF>1</tpNF><idDest>1</idDest><cMunFG>3303302</cMunFG><tpImp>4</tpImp><tpEmis>9</tpEmis><cDV>4</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><indFinal>1</indFinal><indPres>1</indPres><procEmi>0</procEmi><verProc>6.35.xxx</verProc><dhCont>2020-03-23T18:01:03-03:00</dhCont><xJust>Motivo da Emissao em Contigencia: Caixa OffLine</xJust></ide><emit><CNPJ>15593743000432</CNPJ><xNome>TEKNISA SA</xNome><xFant>TEKNISA - 0030</xFant><enderEmit><xLgr>R XV DE NOVEMBRO, 8</xLgr><nro>000</nro><xBairro>CENTRO</xBairro><cMun>3303302</cMun><xMun>NITEROI</xMun><UF>RJ</UF><CEP>24020125</CEP><cPais>1058</cPais><xPais>BRASIL</xPais></enderEmit><IE>79817422</IE><IM>1650159</IM><CNAE>5611203</CNAE><CRT>3</CRT></emit><det nItem=\"1\"><prod><cProd>8510100200</cProd><cEAN>SEM GTIN</cEAN><xProd>GORJETA CONCEDIDA</xProd><NCM>21069090</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>0.9900000000</vUnCom><vProd>0.99</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>0.9900000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS40><orig>0</orig><CST>41</CST></ICMS40></ICMS><PIS><PISNT><CST>07</CST></PISNT></PIS><COFINS><COFINSNT><CST>07</CST></COFINSNT></COFINS></imposto></det><det nItem=\"2\"><prod><cProd>8011102200</cProd><cEAN>SEM GTIN</cEAN><xProd>SUCO MELANC C/ABAC</xProd><NCM>20098990</NCM><CFOP>5102</CFOP><uCom>UN</uCom><qCom>1.0000</qCom><vUnCom>9.9000000000</vUnCom><vProd>9.90</vProd><cEANTrib>SEM GTIN</cEANTrib><uTrib>UN</uTrib><qTrib>1.0000</qTrib><vUnTrib>9.9000000000</vUnTrib><indTot>1</indTot></prod><imposto><vTotTrib>1.17</vTotTrib><ICMS><ICMS00><orig>0</orig><CST>00</CST><modBC>3</modBC><vBC>9.90</vBC><pICMS>18.00</pICMS><vICMS>1.78</vICMS></ICMS00></ICMS><PIS><PISAliq><CST>01</CST><vBC>9.90</vBC><pPIS>1.65</pPIS><vPIS>0.16</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>9.90</vBC><pCOFINS>7.60</pCOFINS><vCOFINS>0.75</vCOFINS></COFINSAliq></COFINS></imposto></det><total><ICMSTot><vBC>9.90</vBC><vICMS>1.78</vICMS><vICMSDeson>0.00</vICMSDeson><vFCP>0.00</vFCP><vBCST>0.00</vBCST><vST>0.00</vST><vFCPST>0.00</vFCPST><vFCPSTRet>0.00</vFCPSTRet><vProd>10.89</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vIPIDevol>0.00</vIPIDevol><vPIS>0.16</vPIS><vCOFINS>0.75</vCOFINS><vOutro>0.00</vOutro><vNF>10.89</vNF><vTotTrib>2.34</vTotTrib></ICMSTot></total><transp><modFrete>9</modFrete></transp><pag><detPag><tPag>01</tPag><vPag>10.89</vPag></detPag><vTroco>0.00</vTroco></pag><infAdic><infCpl>NFCe EMITIDA EM CONTIGENCIA - PROCOM RJ - FONE 151 - Av. Rio Branco, 25 - Centro, Rio de Janeiro - RJ, 20.090-030 (LEI 5.817/2010)</infCpl><obsCont xCampo=\"NrSeqVen-IdOrigemVen\"><xTexto>0030-001-0000000031-CMD_FOS</xTexto></obsCont></infAdic></infNFe></NFe>\r\n",
                "ITENS": [
                    {
                        "NRSEQUITVEND": "001",
                        "CDPRODUTO": "0000000009",
                        "QTPRODVEND": 1,
                        "VRUNITVEND": 16.9,
                        "VRTOTAL": 16.9,
                        "IMPOSTOS": [
                            {
                                "CDIMPOSTO": "00",
                                "VRPEALPRODIT": 3.2,
                                "VRIMPOPRODIT": 0.54,
                                "CDCSTPRODI": "00",
                                "CDCSTPRODPC": "01",
                                "CDCFOPPROD": "5102",
                                "VRPERCOFINS": 7.6,
                                "VRPERPIS": 1.65,
                                "VRBASECALCREDUZ": 0,
                                "VRIMPOPRODREDUZ": 0,
                                "VRBASECALCICMS": 16.9,
                                "VRBCREDUZICMS": 0,
                                "VRPRBCREDUICMS": 0,
                                "VRIMPPIS": 0.28,
                                "VRIMPCOFINS": 1.28,
                                "VRTOTTRIBIBPT": 5.84
                            }
                        ]
                    }
                ],
                "PAGAMENTOS": [
                    {
                        "NRSEQUMOVI": "0000000002",
                        "CDTIPORECE": "011",
                        "IDTIPOMOVIVE": "E",
                        "VRMOVIVEND": 16.9,
                        "CDNSUTEF": null
                    }
                ]
            }
        ]
    }
  });
});

module.exports = router;