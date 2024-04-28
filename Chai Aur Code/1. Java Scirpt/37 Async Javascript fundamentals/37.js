// async code

/*

JavaScript ---> synchronous 
           ---> single threaded
            
            // synchronous menas ek code exceuted fir ek code exceuted means ek code exceuted at a time


EXECUTION CONTEXT
        --> excute one line of code at a time  ( means synchronous)
        --> console log-> 1
        --> console log-> 12
        |
        |
        |   CALL STACK         MEMORY HEAP
*/


/*

BLOCKING CODE     
        -> block the flow of program
        -> read file sync
        jb tk file read nhi hoti  jab tak aur kuchh kam nhi kar skta  

NON BLOCKING CODE
        -> does not block execution
        -> read file async

        jab tak baki kam karo aur jab file read kar ke lata hu to m notify kar dunga


user ka data aaya regisnation ka to pehle vo DB me jake sahi se store hoye fir hi noticw kare ki successful regiter to block code
to Dono ka use hai 

1 img

set timeout
1
0,2   mewns 0 sec ke bad 2 print to ye pehle queue me jayega jab tak 3 print ho jayega 
3

output is   
1 3 2 
*/  