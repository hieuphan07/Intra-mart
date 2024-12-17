----------------
-- apl409_get_data_nw_04
----------------
SELECT
  no,
  partNumber,
  modelCdAnalysis,
  ovrallRank,
  suppProdRank,
  pmTargtTpDom,
  pmTargtTpOvrs,
  partCategory,
  TO_CHAR(ovPrdctFinYmd,'YYYY-MM-DD') as ovPrdctFinYmd,
  TO_CHAR(ovSuppFinYmd,'YYYY-MM-DD') as ovSuppFinYmd,
  TO_CHAR(dmPrdctFinYmd,'YYYY-MM-DD') as dmPrdctFinYmd, 
  TO_CHAR(dmInvFinSch,'YYYY-MM-DD') as dmInvFinSch,
  TO_CHAR(dmNewLMtnStr,'YYYY-MM-DD') as dmNewLMtnStr,
  TO_CHAR(dmInvFinDec,'YYYY-MM-DD') as dmInvFinDec,
  dmSuppFinYmd,
  dmSuppFinFlg,
  emphaSontPartSate,
  checkNo,
  supplyPartNm,
  newMdlInvtPic,
  curInvtPic,
  domesDlvLctTp,
  ovseaDlvLctTp
FROM
  APL409_PARTS_MASTER_NW_04;
