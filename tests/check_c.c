#include <stdio.h>
#include <string.h>
#include "../reference/c/nutime.h"
int main(void) {
  struct { uint32_t ms; const char *want; } v[] = {{0,"00:00:00"},{863,"00:00:00"},{864,"00:00:01"},{21600000,"02:50:00"},
    {25920000,"03:00:00"},{43200000,"05:00:00"},{64800000,"07:50:00"},{86399000,"09:99:98"},{86399136,"09:99:99"}};
  char buf[9];
  for (unsigned i = 0; i < sizeof v / sizeof v[0]; i++) { nt_format(nt_from_ms(v[i].ms), buf);
    if (strcmp(buf, v[i].want)) { printf("c: %u -> %s != %s\n", v[i].ms, buf, v[i].want); return 1; } }
  nt_acc a = {0}; uint64_t cycles = 0; for (int i = 0; i < 125; i++) cycles += nt_acc_next(&a);
  if (cycles != 32768ULL * 108) { printf("c: accumulator %llu\n", (unsigned long long)cycles); return 1; }
  if (3456000ULL * 108 / 125 != NT_CYCLES_PER_TICK_3456KHZ) return 1;
  if (nt_nu_day(0) != 40587 || nt_nu_day(946684800000ULL + 43200000ULL) != 51544 || nt_nu_day(1794916800000ULL) != 61361) { puts("c: nu_day"); return 1; }
  puts("c: ok"); return 0;
}
