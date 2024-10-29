# week-3-exercises.py
# 
# Python Exercises: 
# Variables (declaration, initialization), string concatenation, basic arithmetic, rounding, lists, and user input.
#
# This is how you can add an author attribution and software license within your Python code:
# Author: Louis Goldford
# License: Creative Commons Attribution 4.0 International (CC BY 4.0)
# 
# You are free to:
# - Share: copy and redistribute the material in any medium or format
# - Adapt: remix, transform, and build upon the material for any purpose, even commercially.
#
# Under the following terms:
# - Attribution: You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
#   You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
#
# Full license text: https://creativecommons.org/licenses/by/4.0/
#
# Attribution: This work includes code developed by Dr. Louis Goldford for MHL Data Sonification, Week 3.
#
# To “comment in” or “comment out” lines of code in VS Code:  
# Highlight the line(s) of code you want to change, and then:  
# - on Windows: Press Ctrl + / 
# - on Mac: Press Cmd + /

# exercise 1 declare and initialize a MIDI note
# middleC = 60
# print(middleC)

# exercise 2 
# part1 = "Do Re Mi"
# part2 = "Fa Sol La"
# phrase = part1 + " " + part2
# print(phrase)

# exercise 3
# quarter_note = 1.0
# eigth_note = 0.5
# total_duration = quarter_note + eigth_note
# print("the total duration ist: " + str(total_duration)) # turn float into a string

# exercise 4
# note_duration = 1.934759672945
# rounded_duration = round(note_duration)
# print(rounded_duration)

# exercise 5
# c_major_triad = [60, 64, 67] # CEG
# print(c_major_triad)

# exercise 6
# c_note, e_note, g_note = 60, 64, 67
# average_note = (c_note + e_note + g_note) / 3
# print(average_note)

# exercise 7
# # # # # # # # # # do on your own

# exercise 8
# first _part = "Do Re Mi Fa"
# second_part = "Sol La Ti Do"
# full_scale = first_part + " " + second_part
# print(full_scale)

# exercise 9
# duration1, duration2 = 1.3333333, 2.666666
# total_duration_rounded = round(duration1 + duration2)
# print(total_duration_rounded)

# exercise 10
# import random 
# solfege_scale =["Do", "Re", "Mi", "Fa", "So", "La", "Ti", "Do"]
# random.shuffle(solfege_scale)
# print(solfege_scale)

# exercise 11
# midi_note = int(input("Enter a MIDI note number: "))
# print(midi_note)

# exercise 12
# # # # # # # # # do on your own

# exercise 13
# solfege1 = input("Enter the first syllable (like Do): ")
# solfege2 = input("Enter the second syllable: ")
# solfege_phrase = solfege1 + " " + solfege2
# print(solfege_phrase)

# exercise 14
# tempo = int(input("enter the tempo in bpm: "))
# beat_duration = 60000 / tempo
# four_beat_duration = beat_duration x 4
# print(four_beat_duration)

# exercise 15
# beat_duration = int(input("Enter the beat duration in ms: "))
# bpm = 60000 / beat_duration
# print(bpm)

# exercise 16
# import time
# bpm = int(input("Enter a tempo in bpm: "))
# interval_in_s = 60 / bpm
# time.sleep(0)
# print("Tick 1")
# time.sleep(interval_in_s)
# print("Tick 2")
# time.sleep(interval_in_s)
# print("Tick 3")
# time.sleep(interval_in_s)
# print("Tick 4")
