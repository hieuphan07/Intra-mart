--------------------------------------------------------
--  File created - Tuesday-May-07-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table IMFR_UT_SF_NIMVN1142_APL004
--------------------------------------------------------
CREATE TABLE BM_NIMVN1142_APL004_HIEU_NW_04(
	BM_INSERT_ID 		 VARCHAR2(20), 
    BM_APPLICATION_ID 	 VARCHAR2(100),
    BM_APPLICATION_NO   NUMBER(10, 0),
    BM_VERSION_NO       NUMBER(10, 0),
    BM_CREATE_DATE      TIMESTAMP(6),
    BM_CREATE_USER_CD   VARCHAR2(100),
    BM_RECORD_DATE      TIMESTAMP(6),
    BM_RECORD_USER_CD   VARCHAR2(100),
    BM_PRESERVE_FLAG    VARCHAR2(1),
    BM_MACHINE_NAME       VARCHAR2(500),
    BM_MACHINE_ID       VARCHAR2(500),
    BM_DESCRIPTION      VARCHAR2(500),
    BM_HINBAN_A         VARCHAR2(500),
    BM_HINBAN_B         VARCHAR2(500),
    BM_FILE_KEY         VARCHAR2(4000),
    PRIMARY KEY (BM_INSERT_ID)
);

INSERT INTO BM_NIMVN1142_APL004_HIEU_NW_04 (BM_INSERT_ID, BM_APPLICATION_ID, BM_APPLICATION_NO, BM_VERSION_NO, BM_CREATE_DATE, BM_CREATE_USER_CD, BM_RECORD_DATE, BM_RECORD_USER_CD, BM_PRESERVE_FLAG, BM_MACHINE_NAME, BM_MACHINE_ID, BM_DESCRIPTION, BM_HINBAN_A, BM_HINBAN_B, BM_FILE_KEY)
VALUES ('bm_000004', 'bm_app_000004', '4', '1', '04-Nov-2024', 'hieu_nw_04', '04-Nov-2024', 'hieu_nw_04', '0', 'Drilling machine', 'bm_mc_000004', 'A drilling machine is a machine tool used in the drilling machining process to create round holes in various materials, such as metal, wood, and plastic. These machines function by rotating a drill bit at high speeds and applying pressure to drive it into the workpiece, resulting in precise and clean holes.', 'X1006', 'EFMM', 'lkasjedjkaslkwejj12312');

('bm_000001', 'bm_app_000001', '1', '1', '04-Nov-2024', 'hieu_nw_04', '04-Nov-2024', 'hieu_nw_04', '0', 'Sewing machine', 'bm_mc_000001', 'sewing machine, any of various machines for stitching material (such as cloth or leather), usually having a needle and shuttle to carry thread and powered by treadle, waterpower, or electricity. It was the first widely distributed mechanical home appliance and has been an important industrial machine.', 'X1006', 'EFMM', 'asdfkjfhlajhwlerjaqj12312');

--------------------------------------------------------
--  Search machine query
--------------------------------------------------------
SELECT
    BM_INSERT_ID    AS insert_id,
    BM_MACHINE_ID   AS machine_id,
    BM_MACHINE_NAME   AS machine_name,
    to_char(BM_CREATE_DATE, 'yyyy-mm-dd hh24:mi:ss') AS create_date,
    to_char(BM_RECORD_DATE, 'yyyy-mm-dd hh24:mi:ss') AS record_date,
    BM_FILE_KEY as file_key
FROM
	BM_NIMVN1142_APL004_HIEU_NW_04
/*BEGIN*/
WHERE
  /*IF machine_name != '' && machine_name != null*/
    REGEXP_LIKE ( BM_MACHINE_NAME,/*machine_name*/'','i' )
  /*END*/
/*END*/
ORDER BY BM_INSERT_ID
