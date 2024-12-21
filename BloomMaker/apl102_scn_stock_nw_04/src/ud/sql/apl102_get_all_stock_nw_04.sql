---------------
-- apl102_get_all_stock_nw_04
---------------
SELECT
  PARTNUM,
  MODELUSER,
  CASE WHEN RANK = 0 THEN '0.00' 
       ELSE TO_CHAR(RANK,'FM999,999,999,999,999,999.00') 
  END AS RANK,
  CASE WHEN QUANTITY = 0 THEN '0.00' 
       ELSE TO_CHAR(QUANTITY,'FM999,999,999,999,999,999.00') 
  END AS QUANTITY,
  SALESPLAN,
  TO_CHAR(BOXSTARTDT, 'yyyy/mm/dd hh24:mi:ss') AS BOXSTARTDT,
  TO_CHAR(BOXENDDT, 'yyyy/mm/dd hh24:mi:ss') AS BOXENDDT,
  BOXTYPE
FROM
  SF_NIMVN1142_APL102_NW_04;