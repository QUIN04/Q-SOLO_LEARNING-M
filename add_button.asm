
_main:

;add_button.c,4 :: 		void main(){
;add_button.c,6 :: 		TRISB = 0x00;
	CLRF       TRISB+0
;add_button.c,7 :: 		PORTA.RA0  = 1;
	BSF        PORTA+0, 0
;add_button.c,10 :: 		while(1){
L_main0:
;add_button.c,11 :: 		if(PORTA.RA0){
	BTFSS      PORTA+0, 0
	GOTO       L_main2
;add_button.c,12 :: 		button_pressed = 1;
	MOVLW      1
	MOVWF      _button_pressed+0
	MOVLW      0
	MOVWF      _button_pressed+1
;add_button.c,13 :: 		Delay_ms(200);
	MOVLW      65
	MOVWF      R12+0
	MOVLW      238
	MOVWF      R13+0
L_main3:
	DECFSZ     R13+0, 1
	GOTO       L_main3
	DECFSZ     R12+0, 1
	GOTO       L_main3
	NOP
;add_button.c,15 :: 		if(PORTA.RA0 == 0){
	BTFSC      PORTA+0, 0
	GOTO       L_main4
;add_button.c,16 :: 		count--;
	MOVLW      1
	SUBWF      _count+0, 1
	BTFSS      STATUS+0, 0
	DECF       _count+1, 1
;add_button.c,17 :: 		}
L_main4:
;add_button.c,18 :: 		if( count < 0){
	MOVLW      128
	XORWF      _count+1, 0
	MOVWF      R0+0
	MOVLW      128
	SUBWF      R0+0, 0
	BTFSS      STATUS+0, 2
	GOTO       L__main10
	MOVLW      0
	SUBWF      _count+0, 0
L__main10:
	BTFSC      STATUS+0, 0
	GOTO       L_main5
;add_button.c,19 :: 		PORTB = count;
	MOVF       _count+0, 0
	MOVWF      PORTB+0
;add_button.c,20 :: 		}else{
	GOTO       L_main6
L_main5:
;add_button.c,21 :: 		if( button_pressed  == 1){
	MOVLW      0
	XORWF      _button_pressed+1, 0
	BTFSS      STATUS+0, 2
	GOTO       L__main11
	MOVLW      1
	XORWF      _button_pressed+0, 0
L__main11:
	BTFSS      STATUS+0, 2
	GOTO       L_main7
;add_button.c,22 :: 		button_pressed  = 0;
	CLRF       _button_pressed+0
	CLRF       _button_pressed+1
;add_button.c,23 :: 		count++;
	INCF       _count+0, 1
	BTFSC      STATUS+0, 2
	INCF       _count+1, 1
;add_button.c,24 :: 		}
L_main7:
;add_button.c,25 :: 		if(count > 7){
	MOVLW      128
	MOVWF      R0+0
	MOVLW      128
	XORWF      _count+1, 0
	SUBWF      R0+0, 0
	BTFSS      STATUS+0, 2
	GOTO       L__main12
	MOVF       _count+0, 0
	SUBLW      7
L__main12:
	BTFSC      STATUS+0, 0
	GOTO       L_main8
;add_button.c,26 :: 		count = 0;
	CLRF       _count+0
	CLRF       _count+1
;add_button.c,27 :: 		}
L_main8:
;add_button.c,28 :: 		PORTB = count;
	MOVF       _count+0, 0
	MOVWF      PORTB+0
;add_button.c,29 :: 		}
L_main6:
;add_button.c,30 :: 		}
L_main2:
;add_button.c,31 :: 		}
	GOTO       L_main0
;add_button.c,32 :: 		}
L_end_main:
	GOTO       $+0
; end of _main
