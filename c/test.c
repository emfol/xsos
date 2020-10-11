#include <stdio.h>
#include <string.h>
#include <assert.h>
#include "xsos.h"

void game1(void) {
    char grid_string[XSOS_GRID_STRING_SIZE + 1], string[XSOS_STRING_SIZE + 1];
    unsigned int state = xsos_start(XSOS_X);

    assert(state == 0x40000);

    state = xsos_select(state, 4);

    assert(state == 0x42010);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "    x    ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), " | | \n |x| \n | | \n") == 0);
    assert(xsos_select(state, 4) == 0);

    state = xsos_select(state, 2);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "  o x    ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), " | |o\n |x| \n | | \n") == 0);
    assert(xsos_select(state, 2) == 0);

    state = xsos_select(state, 0);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "x o x    ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x| |o\n |x| \n | | \n") == 0);
    assert(xsos_select(state, 0) == 0);

    state = xsos_select(state, 8);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "x o x   o") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x| |o\n |x| \n | |o\n") == 0);
    assert(xsos_select(state, 8) == 0);

    state = xsos_select(state, 5);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "x o xx  o") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x| |o\n |x|x\n | |o\n") == 0);
    assert(xsos_select(state, 5) == 0);

    state = xsos_select(state, 3);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "x ooxx  o") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x| |o\no|x|x\n | |o\n") == 0);
    assert(xsos_select(state, 3) == 0);

    state = xsos_select(state, 1);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxooxx  o") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\no|x|x\n | |o\n") == 0);
    assert(xsos_select(state, 1) == 0);

    state = xsos_select(state, 7);

    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxooxx oo") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\no|x|x\n |o|o\n") == 0);
    assert(xsos_select(state, 7) == 0);

    state = xsos_select(state, 6);

    assert(state != 0);
    assert(xsos_done(state) == 1);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxooxxxoo") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\no|x|x\nx|o|o\n") == 0);
    assert(xsos_select(state, 6) == 0);

    puts(string);
    puts(grid_string);
    puts("Game #1 OK!\n");
}

void game2(void) {
    char grid_string[XSOS_GRID_STRING_SIZE + 1], string[XSOS_STRING_SIZE + 1];
    unsigned int state = xsos_start(XSOS_X);

    assert(state == 0x40000);

    state = xsos_select(state, 1);
    assert(state == 0x40402);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), " x       ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), " |x| \n | | \n | | \n") == 0);
    assert(xsos_select(state, 1) == 0);

    state = xsos_select(state, 6);
    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), " x    o  ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), " |x| \n | | \no| | \n") == 0);
    assert(xsos_select(state, 6) == 0);

    state = xsos_select(state, 0);
    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xx    o  ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x| \n | | \no| | \n") == 0);
    assert(xsos_select(state, 0) == 0);

    state = xsos_select(state, 2);
    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxo   o  ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\n | | \no| | \n") == 0);
    assert(xsos_select(state, 2) == 0);

    state = xsos_select(state, 4);
    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxo x o  ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\n |x| \no| | \n") == 0);
    assert(xsos_select(state, 4) == 0);

    state = xsos_select(state, 7);
    assert(state != 0);
    assert(xsos_done(state) == 0);
    assert(xsos_winner(state) == 0);
    assert(strcmp(xsos_string(state, string), "xxo x oo ") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "x|x|o\n |x| \no|o| \n") == 0);
    assert(xsos_select(state, 7) == 0);

    state = xsos_select(state, 8);
    assert(state != 0);
    assert(xsos_done(state) != 0);
    assert(xsos_winner(state) == 0x111);
    assert(strcmp(xsos_string(state, string), "Xxo X ooX") == 0);
    assert(strcmp(xsos_grid_string(state, grid_string), "X|x|o\n |X| \no|o|X\n") == 0);
    assert(xsos_select(state, 8) == 0);

    puts(string);
    puts(grid_string);
    puts("Game #2 OK!\n");
}

int main(void) {
    game1();
    game2();
    puts("Success!");
    return 0;
}

