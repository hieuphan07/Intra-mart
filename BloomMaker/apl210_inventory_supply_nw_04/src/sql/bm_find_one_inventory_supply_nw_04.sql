-------------
-- bm_find_one_inventory_supply_nw_04
-------------
SELECT
  *
FROM
  bm_inventory_supply_nw_04
WHERE
  insert_id = /*insert_id*/''
fetch first 1 rows only;
