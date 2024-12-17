---------------
-- bm_delete_null_row_inventory_supply_nw_04
---------------
DELETE FROM bm_inventory_supply_nw_04
WHERE
  insert_id = /*insert_id*/''
  AND stock IS NULL
  AND company IS NULL
  AND dept IS NULL
  AND boxregistno IS NULL
  AND modelinfo IS NULL
  AND branch IS NULL
  AND boxstartdt IS NULL
  AND boxenddt IS NULL
  AND registqnt IS NULL
  AND rewdomesticleads IS NULL
  AND remainqnt IS NULL
  AND detailtype IS NULL
  AND status IS NULL
  AND newpic IS NULL
  AND timingtype IS NULL
  AND timing IS NULL
  AND timingspecification IS NULL
  AND description IS NULL