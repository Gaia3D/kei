-- FK, Index 는 별도 파일로 분리. 맨 마지막에 작업 예정
drop table if exists micro_service cascade;


-- 서비스 관리
create table micro_service (
	micro_service_id			        int,
	micro_service_key				    varchar(30),
	micro_service_name				    varchar(60)			not null,
	micro_service_type				    varchar(30)			not null,
	server_ip					        varchar(45)			not null,
	api_key						        varchar(256),
	url_scheme					        varchar(10)			not null,
	url_host					        varchar(256)		not null,
	url_port					        int,
	url_path					        varchar(256),
	status						        varchar(20)			default 'use',
	available					        boolean				default true,
	description					        varchar(256),
	last_health_date                    timestamp with time zone,
	update_date				            timestamp with time zone,
	insert_date				            timestamp with time zone			default now(),
	constraint micro_service_pk primary key (micro_service_id)
);

comment on table micro_service is '서비스 관리';
comment on column micro_service.micro_service_id is '고유키';
comment on column micro_service.micro_service_key is '서비스 키';
comment on column micro_service.micro_service_name is '서비스명';
comment on column micro_service.micro_service_type is '서비스 유형. cache(캐시 Reload), simulation';
comment on column micro_service.server_ip is '서버 IP';
comment on column micro_service.api_key is 'API KEY';
comment on column micro_service.url_scheme is '사용할 프로토콜';
comment on column micro_service.url_host is '호스트';
comment on column micro_service.url_port is '포트';
comment on column micro_service.url_path is '경로, 리소스 위치';
comment on column micro_service.status is '상태. up : 실행, down : 정지, unknown : 알수 없음';
comment on column micro_service.available is 'true : 사용, false : 사용안함';
comment on column micro_service.description is '설명';
comment on column micro_service.last_health_date is '마지막 Health Check 시간';
comment on column micro_service.update_date is '수정일';
comment on column micro_service.insert_date is '등록일';