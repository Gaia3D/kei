drop table if exists board_notice cascade;
drop table if exists board_notice_comment cascade;
drop table if exists board_notice_detail cascade;
drop table if exists board_notice_file cascade;

create table board_notice(

	board_notice_id		bigint							not null,
	user_id				varchar(32)						not null,
	title				varchar(256)					not null,
	notice_site			varchar(256),
	start_date			timestamp with time zone,
	end_date			timestamp with time zone,
	available			boolean							default true,
	client_ip 			varchar(45)						not null,
	view_count			integer							default 0,
	update_date			timestamp with time zone,	
	insert_date			timestamp with time zone		default now(),
	constraint board_notice_pk 	primary key (board_notice_id)
);

comment on table board_notice is '공지사항';
comment on column board_notice.board_notice_id is '공지사항 고유번호';
comment on column board_notice.user_id	 is '사용자 아이디';
comment on column board_notice.title is '제목';
comment on column board_notice.notice_site is '공지사항 게시 페이지';
comment on column board_notice.start_date is '게시 시작시간';
comment on column board_notice.end_date is '게시 종료시간';
comment on column board_notice.available is '사용유무, Y : 사용, N : 사용안함';
comment on column board_notice.client_ip is '요청 IP';
comment on column board_notice.view_count is '조회수';
comment on column board_notice.update_date is '수정일';
comment on column board_notice.insert_date is '등록일';

create table board_notice_detail(
	
	board_notice_detail_id	bigint						not null,
	board_notice_id			bigint						not null,
	contents				text,
	constraint board_notice_detail_pk 	primary key (board_notice_detail_id)
);

comment on table board_notice_detail is '공지사항 상세';
comment on column board_notice_detail.board_notice_detail_id is '공지사항 상세 고유번호';
comment on column board_notice_detail.board_notice_id is '공지사항 고유번호';
comment on column board_notice_detail.contents is '상세 내용';

create table board_notice_file(

	board_notice_file_id	bigint						not null,
	board_notice_id			bigint						not null,
	file_name				varchar(256)				not null,
	file_real_name			varchar(100)				not null,
	file_path				varchar(256)				not null,
	file_size				varchar(12)					not null,
	file_ext				varchar(10)					not null,
	insert_date				timestamp with time zone	default now(),
	constraint board_notice_file_pk 	primary key (board_notice_file_id)
);

comment on table board_notice_file is '공지사항 파일';
comment on column board_notice_file.board_notice_file_id is '공지사항 파일 고유번호';
comment on column board_notice_file.board_notice_id is '공지사항 고유번호';
comment on column board_notice_file.file_name is '파일명';
comment on column board_notice_file.file_real_name is '실제 파일명';
comment on column board_notice_file.file_path is '파일 경로';
comment on column board_notice_file.file_size is '파일 크기';
comment on column board_notice_file.file_ext is '파일 확장자';
comment on column board_notice_file.insert_date is '등록일';

create table board_notice_comment(

	board_notice_comment_id		bigint						not null,
	board_notice_id				bigint						not null,
	user_id						varchar(32)					not null,
	content						varchar(4000)				not null,
	client_ip					varchar(45)					not null,
	ancestor					integer						default 1,
	parent						integer						default 1,
	depth						integer						default 1,
	like_count					integer						default 0,
	insert_date					timestamp with time zone	default now(),
	constraint board_notice_comment_pk 	primary key (board_notice_comment_id)
);

comment on table board_notice_comment is '공지사항 의견';
comment on column board_notice_comment.board_notice_comment_id is '공지사항 의견 고유번호';
comment on column board_notice_comment.board_notice_id is '공지사항 고유번호';
comment on column board_notice_comment.user_id is '사용자 아이디';
comment on column board_notice_comment.content is '의견 내용';
comment on column board_notice_comment.client_ip is '요청 IP';
comment on column board_notice_comment.ancestor is '조상';
comment on column board_notice_comment.parent is '부모';
comment on column board_notice_comment.depth is '깊이';
comment on column board_notice_comment.like_count is '공감수';
comment on column board_notice_comment.insert_date is '등록일';