---------------
-- apl102_insert_records_nw_04
---------------
INSERT INTO SF_NIMVN1142_APL102_NW_04
  (partNum, modeluser, rank, quantity, salesplan, boxstartdt, boxenddt, boxtype)
VALUES
  (/*p_partNum*/'',
  /*p_modelUser*/'',
  TO_NUMBER(REPLACE(/*p_rank*/'',',','')),
  TO_NUMBER(REPLACE(/*p_quantity*/'',',','')),
  /*p_salesPlan*/'',
  /*p_boxStartDt*/'',
  /*p_boxEndDt*/'',
  /*p_boxType*/'');
