#!/usr/bin/env pymol
load ./Script/SupFiles/3BOI_B/2PNE_A/2PNE_A.sup_all_atm_lig
hide all
show cartoon
color blue, chain A
color red, chain B
set ray_shadow, 0
set stick_radius, 0.3
set sphere_scale, 0.25
show stick, not polymer
show sphere, not polymer
bg_color white
set transparency=0.2
zoom polymer
