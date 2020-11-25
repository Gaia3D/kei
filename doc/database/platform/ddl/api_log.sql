drop table if exists api_log cascade;

commit;


-- API 호출 이력
create table api_log(
	api_log_id					bigint,
	service_code				varchar(100)		not null,
	service_name				varchar(100)		not null,
	client_ip					varchar(45)			not null,
	client_server_name			varchar(30),
	api_key						varchar(256)		not null,
	device_kind					varchar(1)			not null,
	request_type 				varchar(20)			not null,
	user_id						varchar(32),
	user_ip						varchar(45),
	data_count					int,
	data_delimiter				varchar(3),
	phone						varchar(256),
	email						varchar(256),
	messanger					varchar(256),
	success_yn					char(1),
	business_success_yn			char(1),
	result_message				varchar(1000),
	business_result_message		varchar(1000),
	insert_date				timestamp 			with time zone			default now(),
	constraint api_log_pk primary key (api_log_id)
);