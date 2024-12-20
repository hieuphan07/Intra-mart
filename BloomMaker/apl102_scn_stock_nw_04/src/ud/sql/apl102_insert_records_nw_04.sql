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
  TO_DATE(/*p_boxStartDt*/'', 'yyyy/mm/dd hh24:mi:ss'),
  TO_DATE(/*p_boxEndDt*/'', 'yyyy/mm/dd hh24:mi:ss'),
  /*p_boxType*/'');
