// js me code execute kaise hota hai 

//JAVASCRIPT EXECUTION CONTACTS 
/*

means jo js file hai vo kaise execute hogi 
pehle code -> ko GLOBAL EXECTION CONTACTS (GEC) ko jaha GEC banega vaha THIS referre  kar diya jata hai
browser me alg hota hai waha THIS ki value window aati hai 

JS single THREADS hai 

code ->GEC
    -> FUNCTION EC
    ->EVAL EC (as same as GEC)

run in two phase 
1. MEMORY CREATION PHASE or CREATION PHASE 
    variable ki jagah allocated hota hai bs (memory allocation only)
2. EXECUTION PHASE
    +,- aur cal. ye sab hota hai 

ex: 1. let val1=10
    2. let val2=5
    3. funtion add(num1,num2){
    4.     let total = num1+num2
    5.     return total
    6. }
    7. let result1=add(val1,val2)
    8. let result2=add(10,2)

    exection processes
1. GLOBAL EXECTION /GLOBAL ENIVERMENT 
        sab se pehle located karega TIS
2. MEMORY phase
        variable ko space dega 
        val1->undefined
        val2->undefined
        add->defination function ki  line 3 to 6 ki 
        result1->undefined
        result2->undefined
3. EXECUTION PHASE 
        val1=10
        val2=5
        line 3 to 6 me kuchh nhi 
        line 4 result1->add->new EXECUTION PHASE 
                                 new variable environment + execution thread to fir se 
                                 1. MEMORY PHASE 
                                    val1->undifined
                                    val2->undifined
                                    total->undifined

                                2. EXECUTION CONTEXT 
                                    num1=10
                                    num2=5
                                    total 15 and this return to global execution aur delete this execution context 
        line 8 result2  me fir se vahi new execution phase same like result1




*/



/*
CALL STACK 
LIKE STAck hoga aagega kam huaa fir pop
            |           |
            |           |
            |           |
            |           |
            |           |
            _____________
            | GEC       |
            _____________

*/