--foreign key 설정 : 식별자는 "(테이블명)_fk_(칼럼명)"으로 통일

alter table only board_notice add constraint board_notice_fk_user_id foreign key (user_id) references user_info(user_id) on delete cascade;
alter table only board_notice_detail add constraint board_notice_detail_fk_board_notice_id foreign key (board_notice_id) references board_notice(board_notice_id) on delete cascade;
alter table only board_notice_comment add constraint board_notice_comment_fk_board_notice_id foreign key (board_notice_id) references board_notice(board_notice_id) on delete cascade;
alter table only board_notice_file add constraint board_notice_file_fk_board_notice_id foreign key (board_notice_id) references board_notice(board_notice_id) on delete cascade;

alter table only converter_job add constraint converter_job_fk_upload_data_id foreign key (upload_data_id) references upload_data(upload_data_id);
alter table only converter_job_file add constraint converter_job_file_fk_converter_job_id foreign key (converter_job_id) references converter_job(converter_job_id);

alter table only data_attribute_file_info add constraint data_attribute_file_info_fk_data_id foreign key (data_id) references data_info(data_id);
alter table only data_object_attribute_file_info add constraint data_object_attribute_file_info_fk_data_id foreign key (data_id) references data_info(data_id);

alter table only data_attribute add constraint data_attribute_fk_data_id foreign key (data_id) references data_info(data_id);
alter table only data_object_attribute add constraint data_object_attribute_fk_data_id foreign key (data_id) references data_info(data_id);

alter table only data_smart_tiling_file_info add constraint data_smart_tiling_file_info_fk_data_group_id foreign key (data_group_id) references data_group(data_group_id);
alter table only data_smart_tiling_file_parse_log add constraint data_smart_tiling_file_parse_log_fk_data_smart_tiling_file_info foreign key (data_smart_tiling_file_info_id) references data_smart_tiling_file_info(data_smart_tiling_file_info_id);
--식별자 최대 글자수 제한으로 인해 기존의 (테이블명)_fk_(칼럼명)에서 칼럼명 일부(_id)가 잘려 생략되므로 식별자에서 잘리는 부분을 일부러 넣지 않았음

alter table only data_info_origin add constraint data_info_origin_fk_data_id foreign key (data_id) references data_info(data_id);
alter table only data_group add constraint data_group_fk_user_id foreign key (user_id) references user_info(user_id);

alter table only issue add constraint issue_fk_data_id foreign key (data_id) references data_info(data_id);
alter table only issue_detail add constraint issue_detail_fk_issue_id foreign key (issue_id) references issue(issue_id);

alter table only layer add constraint layer_fk_layer_group_id foreign key (layer_group_id) references layer_group(layer_group_id);
alter table only layer_file_info add constraint layer_file_info_fk_layer_id foreign key (layer_id) references layer(layer_id);
alter table only layer_group add constraint layer_group_fk_user_id foreign key (user_id) references user_info(user_id);

alter table only upload_data add constraint upload_data_fk_data_group_id foreign key (data_group_id) references data_group(data_group_id);
alter table only upload_data_file add constraint upload_data_file_fk_upload_data_id foreign key (upload_data_id) references upload_data(upload_data_id);

alter table only user_info add constraint user_info_fk_user_group_id foreign key (user_group_id) references user_group(user_group_id);
alter table only user_device add constraint user_device_fk_user_id foreign key (user_id) references user_info(user_id);
alter table only user_group_menu add constraint user_group_menu_fk_user_group_id foreign key (user_group_id) references user_group(user_group_id);
alter table only user_group_role add constraint user_group_role_fk_user_group_id foreign key (user_group_id) references user_group(user_group_id);
alter table only user_group_role add constraint user_group_role_fk_role_id foreign key (role_id) references role(role_id);

alter table only user_policy add constraint user_policy_fk_user_id foreign key (user_id) references user_info(user_id);

alter table only data_info add constraint data_info_fk_data_group_id foreign key (data_group_id) references data_group(data_group_id);
alter table only data_file_info add constraint data_file_info_fk_data_group_id foreign key (data_group_id) references data_group(data_group_id);
alter table only data_file_parse_log add constraint data_file_parse_log_fk_data_file_info_id foreign key (data_file_info_id) references data_file_info(data_file_info_id);

alter table only data_library_group add constraint data_library_group_fk_user_id foreign key (user_id) references user_info(user_id);
alter table only data_library add constraint data_library_fk_data_library_group_id foreign key (data_library_group_id) references data_library_group(data_library_group_id);
alter table only data_library_upload add constraint data_library_upload_fk_data_library_group_id foreign key (data_library_group_id) references data_library_group(data_library_group_id);

alter table only data_library_converter_job add constraint data_library_converter_job_fk_data_library_upload_id foreign key (data_library_upload_id) references data_library_upload(data_library_upload_id);

alter table only data_library_upload_file add constraint data_library_upload_file_fk_data_library_upload_id foreign key (data_library_upload_id) references data_library_upload(data_library_upload_id);

alter table only data_library_converter_job_file add constraint data_library_converter_job_file_fk_data_library_converter_job foreign key (data_library_converter_job_id) references data_library_converter_job(data_library_converter_job_id);

alter table only design_layer_group add constraint design_layer_group_fk_user_id foreign key (user_id) references user_info(user_id);

alter table only design_layer add constraint design_layer_fk_design_layer_group_id foreign key (design_layer_group_id) references design_layer_group(design_layer_group_id);

alter table only design_layer_attribute add constraint design_layer_attribute_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);
alter table only design_layer_building add constraint design_layer_building_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);
alter table only design_layer_building_height add constraint design_layer_building_height_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);
alter table only design_layer_building_unit add constraint design_layer_building_unit_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);
alter table only design_layer_file_info add constraint design_layer_file_info_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);
alter table only design_layer_land add constraint design_layer_land_fk_design_layer_id foreign key (design_layer_id) references design_layer(design_layer_id);

alter table only urban_group add constraint urban_group_fk_user_id foreign key (user_id) references user_info(user_id);
