/* id.pig */
register /home/hduser2/pigwork/pigudf.js using javascript as pigUtil;

A = load 'pig/addressdata.txt' using PigStorage(':');  -- load the passwd file 
B = foreach A generate $0 as id,$1 as address;  -- extract the user IDs 
B2 = foreach A generate $0 as id,$1 as address;
C = cross B, B2 parallel 10; 
D = foreach C generate B::id,B2::id,pigUtil.leven(B::address,B2::address) ;
store D into 'pig/id.out';  -- write the results to a file name id.out
