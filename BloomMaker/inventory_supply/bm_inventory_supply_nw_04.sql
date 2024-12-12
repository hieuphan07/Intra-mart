CREATE TABLE sf_nimvn1142_apl210(
	insert_id             VARCHAR2(4000)
	, row_no            NUMBER
	, stock                 VARCHAR2(4000)
	, company               VARCHAR2(4000)
	, dept                  VARCHAR2(4000)
	, boxregistno           VARCHAR2(4000)
	, modelinfo             VARCHAR2(4000)
	, branch                VARCHAR2(4000)
	, boxstartdt            VARCHAR2(4000)
	, boxenddt              VARCHAR2(4000)
	, registqnt             VARCHAR2(4000)
	, rewdomesticleads      VARCHAR2(4000)
	, remainqnt             VARCHAR2(4000)
	, detailtype            VARCHAR2(4000)
	, status                VARCHAR2(4000)
	, newpic                VARCHAR2(4000)
	, timingtype            VARCHAR2(4000)
	, timing                VARCHAR2(4000)
	, timingspecification   VARCHAR2(4000)
	, description           VARCHAR2(4000)
);

CREATE TABLE sf_nimvn1142_apl210_his(
	insert_id         VARCHAR2(4000)
	, row_no            NUMBER
	, modifiedcontent   TIMESTAMP
	, modifiedby        VARCHAR2(4000)
);

ALTER TABLE sf_nimvn1142_apl210 ADD CONSTRAINT pk_insert_id PRIMARY KEY(insert_id, row_no);
ALTER TABLE sf_nimvn1142_apl210_his ADD CONSTRAINT pk_insert_id PRIMARY KEY(insert_id, row_no);

COMMIT;

-- insert data
INSERT INTO bm_inventory_supply_nw_04 (insert_id, row_no, stock, company, dept, boxregistno, modelinfo, branch, boxstartdt, boxenddt, registqnt, rewdomesticleads, remainqnt, detailtype, status, newpic, timingtype, timing, timingspecification, description)
SELECT '8hem22lowtz4rq9', 1, 'STK001', 'ABC Corp', 'HR', 'BOX123', 'Model A', 'New York', '2024-01-01', '2024-01-02', '100', '10', '90', 'Full Detail', 'Active', 'image1.png', 'Weekly', 'Monday', 'Morning', 'Box for HR documentation' FROM DUAL
UNION ALL
SELECT '8hem22lowtz4rq9', 2, 'STK002', 'XYZ Ltd', 'IT', 'BOX456', 'Model B', 'San Francisco', '2024-02-15', '2025-02-14', '200', '20', '180', 'Summary', 'Inactive', 'image2.png', 'Monthly', '15th', 'Afternoon', 'IT equipment inventory' FROM DUAL
UNION ALL
SELECT '8hem22lowtz4rq9', 3, 'STK003', 'Global Inc', 'Sales', 'BOX789', 'Model C', 'Chicago', '2024-03-10', '2025-03-09', '300', '50', '250', 'Partial', 'Pending', 'image3.png', 'Quarterly', 'Q1', 'End of Quarter', 'Sales promotional items' FROM DUAL
UNION ALL
SELECT '8hem22xrztz5iq9', 1, 'STK004', 'TechSolutions', 'R&D', 'BOX001', 'Model X', 'Seattle', '2023-06-01', '2024-05-31', '150', '30', '120', 'Summary', 'Active', 'img4.jpg', 'Biweekly', 'Friday', 'End of Day', 'Research project equipment' FROM DUAL
UNION ALL
SELECT '8hem22xrztz5iq9', 2, 'STK005', 'FinCorp', 'Finance', 'BOX002', 'Model Y', 'Denver', '2024-04-01', '2025-03-31', '75', '5', '70', 'Full Detail', 'Inactive', 'img5.png', 'Daily', '10:00 AM', 'Morning', 'Financial department supplies' FROM DUAL
UNION ALL
SELECT '8hem22xrztz5iq9', 3, 'STK006', 'HealthCare Ltd', 'Operations', 'BOX003', 'Model Z', 'Boston', '2023-10-01', '2024-09-30', '500', '50', '450', 'Partial', 'Active', 'img6.png', 'Monthly', '1st', 'Beginning of Month', 'Medical supply records' FROM DUAL
UNION ALL
SELECT '8hem22xrztz5iq9', 4, 'STK007', 'EcoEnergy', 'Logistics', 'BOX004', 'Model W', 'Austin', '2024-01-15', '2025-01-14', '220', '25', '195', 'Summary', 'Pending', 'img7.gif', 'Quarterly', 'Q2', 'Mid Quarter', 'Logistics documentation' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 1, 'STK008', 'RetailNation', 'Marketing', 'BOX005', 'Model V', 'Las Vegas', '2024-05-01', '2025-04-30', '320', '15', '305', 'Full Detail', 'Active', 'img8.jpg', 'Weekly', 'Wednesday', 'Afternoon', 'Campaign planning materials' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 2, 'STK009', 'AutoMotivePro', 'Engineering', 'BOX006', 'Model T', 'Detroit', '2023-09-01', '2024-08-31', '400', '80', '320', 'Full Detail', 'Completed', 'img9.png', 'Yearly', 'Year End', 'Last Business Day', 'Engineering designs archive' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 3, 'STK010', 'AgriGrow', 'Production', 'BOX007', 'Model R', 'Miami', '2023-03-01', '2024-02-29', '180', '20', '160', 'Partial', 'Active', 'img10.jpg', 'Monthly', '20th', 'Afternoon', 'Agricultural product inventory' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 4, 'STK011', 'InnovateHub', 'HR', 'BOX008', 'Model Q', 'Portland', '2024-06-15', '2025-06-14', '250', '35', '215', 'Summary', 'Active', 'img11.png', 'Weekly', 'Tuesday', 'Midday', 'Training materials for HR' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 5, 'STK012', 'MediaConnect', 'PR', 'BOX009', 'Model M', 'Los Angeles', '2023-11-01', '2024-10-31', '600', '90', '510', 'Full Detail', 'Inactive', 'img12.jpg', 'Quarterly', 'Q3', 'Start of Quarter', 'Public relations campaign tools' FROM DUAL
UNION ALL
SELECT '8hem22wo9tz5fq9', 6, 'STK013', 'EduTech', 'IT', 'BOX010', 'Model K', 'Dallas', '2024-08-01', '2025-07-31', '350', '40', '310', 'Partial', 'Active', 'img13.png', 'Monthly', 'Last Day', 'End of Month', 'Educational software licenses' FROM DUAL


-- Oracle Intra-mart insert statement
INSERT INTO bm_inventory_supply_nw_04
(
  insert_id, 
  row_no, 
  stock, 
  company, 
  dept, 
  boxregistno, 
  modelinfo, 
  branch, 
  boxstartdt, 
  boxenddt, 
  registqnt, 
  rewdomesticleads, 
  remainqnt, 
  detailtype, 
  status, 
  newpic, 
  timingtype, 
  timing, 
  timingspecification, 
  description
)
VALUES
( 
  /*insert_id*/'', 
  /*row_no*/'', 
  /*stock*/'', 
  /*company*/'', 
  /*dept*/'', 
  /*boxregistno*/'', 
  /*modelinfo*/'', 
  /*branch*/'', 
  /*boxstartdt*/'', 
  /*boxenddt*/'', 
  /*registqnt*/'', 
  /*rewdomesticleads*/'', 
  /*remainqnt*/'', 
  /*detailtype*/'', 
  /*status*/'', 
  /*newpic*/'', 
  /*timingtype*/'', 
  /*timing*/'', 
  /*timingspecification*/'', 
  /*description*/''
)

-- Get max_row_no
WITH bm_inventory_supply_nw_04_by_insert_id AS(        
  SELECT	
    insert_id
  FROM	
    bm_inventory_supply_nw_04
  WHERE	
    insert_id = '8hem22wo9tz5fq9'
), 
tbl_max_date AS(		
  SELECT	
    filteredTable.insert_id AS insert_id,
    MAX(his.modifiedcontent) AS modifiedcontent,
    MAX(his.modifiedby) AS modifiedby
  FROM	
    bm_inventory_supply_nw_04_by_insert_id filteredTable
    LEFT JOIN bm_inventory_supply_history_nw_04 his
    ON filteredTable.insert_id = his.insert_id
  GROUP BY	
    filteredTable.insert_id
)		
SELECT		
  insert_id,	
  TO_CHAR(modifiedcontent, 'yyyy/mm/dd hh24:mi') AS his_modifiedcontent,	
  modifiedby AS his_modifiedby	
FROM		
  tbl_max_date