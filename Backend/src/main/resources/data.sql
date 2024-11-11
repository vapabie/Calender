Insert Into color (colorid, hexcode, colorname)
values (1, '#b00b69', 'Dark Purple'),
       (2, '#ABC123', 'Green'),
       (3, '#3d90d9', 'Blue');

Insert Into priority (priorityid, priorityname, prioritypoints)
values (1,'busy', 10),
       (2, 'free', 5),
       (3, 'flexible', 8);


Insert Into rewards (rewardid, r_name, r_price)
values (1, 'water', 7),
       (2, 'headpat', 20),
       (3, 'cake', 15);

Insert Into userc (userid, email, userpassword, name, disadmin, points)
values (1, 'admin@admin.com', 'admin', 'admin', true, 0),
       (2, 'user@user.com', 'user', 'user', false, 35);