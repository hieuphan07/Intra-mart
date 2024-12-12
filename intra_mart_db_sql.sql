-- This docoment has been tested and applied at http://158.101.91.74/imdi/tenant/maintenance/database?.
-- It seems similar to Oracle SQL, but there are some differences.
-- Notes: Do not include a semicolon (;) at the end of the SQL command line.

-- Insert rows into database
INSERT INTO <table_name> (column1, column2, column3, ...)
SELECT 'column1_value', 'column2_value', 'column3_value', ... FROM DUAL
UNION ALL
SELECT 'column1_value', 'column2_value', 'column3_value', ... FROM DUAL

-- Another method to insert rows, which also applied to executing many different SQL statements.
BEGIN
    INSERT INTO <table_name> (column1, column2, column3) values ('column1_value', 'column2_value', 'column3_value')
    INSERT INTO <table_name> (column1, column2, column3) values ('column1_value', 'column2_value', 'column3_value')
    INSERT INTO <table_name> (column1, column2, column3) values ('column1_value', 'column2_value', 'column3_value')
    ...
    COMMIT;
END;

-- OR, which has been applied to altering tables
BEGIN
    EXECUTE IMMEDIATE 'ALTER <talbe_name> DISABLE CONSTRAINT <fk_key_name>';
    EXECUTE IMMEDIATE 'ALTER <talbe_name> DISABLE CONSTRAINT <fk_key_name>';
    EXECUTE IMMEDIATE 'ALTER <talbe_name> DISABLE CONSTRAINT <fk_key_name>';
    ...
    COMMIT;
END;
/