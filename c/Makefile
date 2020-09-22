CC := cc
CFLAGS := -std=c89 -Wall -Wpedantic

test: test.exe
	./test.exe

test.exe: xsos.o test.o
	$(CC) -o $@ $^

test.o: test.c xsos.h
	$(CC) -c $(CFLAGS) $<

xsos.o: xsos.c xsos.h
	$(CC) -c $(CFLAGS) $<

.PHONY: test
