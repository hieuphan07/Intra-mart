-------------
-- bm_get_inventory_supply_history_nw_04
-------------
SELECT
  TO_CHAR(modifiedcontent, 'yyyy/mm/dd hh24:mi:ss') AS modified_content,
  modifiedby AS modified_by
FROM bm_inventory_supply_history_nw_04
WHERE insert_id = /*insert_id*/''
ORDER BY modifiedcontent DESC
fetch first 10 rows only;