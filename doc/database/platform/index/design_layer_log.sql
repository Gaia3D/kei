-- constraint 는 부모 테이블에 생성 되지 않고 자식 테이블에 만들어야 함. index 를 잘 타는지는 테스트 필요.
--alter table only design_layer_log_2020 add constraint design_layer_log_2020_pk primary key (design_layer_log_id);


-- index 의 경우 부모 테이블에만 만들면 됨
--create index design_layer_log_idx on design_layer_log (insert_date);
commit;