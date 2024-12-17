-- Insert data
INSERT ALL
    INTO apl409_parts_master_nw_04 (
        no, partNumber, modelCdAnalysis, ovrallRank, suppProdRank, pmTargtTpDom, pmTargtTpOvrs, 
        partCategory, ovPrdctFinYmd, ovSuppFinYmd, dmPrdctFinYmd, dmInvFinSch, dmNewLMtnStr, dmInvFinDec, 
        dmSuppFinYmd, dmSuppFinFlg, emphaSontPartSate, checkNo, supplyPartNm, newMdlInvtPic, 
        curInvtPic, domesDlvLctTp, ovseaDlvLctTp
    )
    VALUES (
        '1', 'PART001', 'MODEL001', 'Rank1', 'ProdRank1', 'TargtDom1', 'TargtOvrs1', 'Category1', 
        TO_DATE('2024-12-01', 'YYYY-MM-DD'), TO_DATE('2024-12-01', 'YYYY-MM-DD'), TO_DATE('2024-11-01', 'YYYY-MM-DD'), TO_DATE('2024-11-15', 'YYYY-MM-DD'), 
        TO_DATE('2024-11-20', 'YYYY-MM-DD'), TO_DATE('2024-11-25', 'YYYY-MM-DD'), 'SuppFin1', 
        'Flag1', 'State1', 'Check001', 'SupplyName1', 'Picture1', 'PictureCur1', 
        'LocationType1', 'LocationTypeOvrs1'
    )
    INTO apl409_parts_master_nw_04 (
        no, partNumber, modelCdAnalysis, ovrallRank, suppProdRank, pmTargtTpDom, pmTargtTpOvrs, 
        partCategory, ovPrdctFinYmd, ovSuppFinYmd, dmPrdctFinYmd, dmInvFinSch, dmNewLMtnStr, dmInvFinDec, 
        dmSuppFinYmd, dmSuppFinFlg, emphaSontPartSate, checkNo, supplyPartNm, newMdlInvtPic, 
        curInvtPic, domesDlvLctTp, ovseaDlvLctTp
    )
    VALUES (
        '2', 'PART002', 'MODEL002', 'Rank2', 'ProdRank2', 'TargtDom2', 'TargtOvrs2', 'Category2', 
        TO_DATE('2024-12-02', 'YYYY-MM-DD'), TO_DATE('2024-12-02', 'YYYY-MM-DD'), TO_DATE('2024-11-02', 'YYYY-MM-DD'), TO_DATE('2024-11-16', 'YYYY-MM-DD'), 
        TO_DATE('2024-11-21', 'YYYY-MM-DD'), TO_DATE('2024-11-26', 'YYYY-MM-DD'), 'SuppFin2', 
        'Flag2', 'State2', 'Check002', 'SupplyName2', 'Picture2', 'PictureCur2', 
        'LocationType2', 'LocationTypeOvrs2'
    )
    INTO apl409_parts_master_nw_04 (
        no, partNumber, modelCdAnalysis, ovrallRank, suppProdRank, pmTargtTpDom, pmTargtTpOvrs, 
        partCategory, ovPrdctFinYmd, ovSuppFinYmd, dmPrdctFinYmd, dmInvFinSch, dmNewLMtnStr, dmInvFinDec, 
        dmSuppFinYmd, dmSuppFinFlg, emphaSontPartSate, checkNo, supplyPartNm, newMdlInvtPic, 
        curInvtPic, domesDlvLctTp, ovseaDlvLctTp
    )
    VALUES (
        '3', 'PART003', 'MODEL003', 'Rank3', 'ProdRank3', 'TargtDom3', 'TargtOvrs3', 'Category3', 
        TO_DATE('2024-12-03', 'YYYY-MM-DD'), TO_DATE('2024-12-03', 'YYYY-MM-DD'), TO_DATE('2024-11-03', 'YYYY-MM-DD'), TO_DATE('2024-11-17', 'YYYY-MM-DD'), 
        TO_DATE('2024-11-22', 'YYYY-MM-DD'), TO_DATE('2024-11-27', 'YYYY-MM-DD'), 'SuppFin3', 
        'Flag3', 'State3', 'Check003', 'SupplyName3', 'Picture3', 'PictureCur3', 
        'LocationType3', 'LocationTypeOvrs3'
    )
SELECT * FROM DUAL;