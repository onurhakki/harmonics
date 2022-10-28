# Power System Harmonics

Harmonics are sinusoidal voltages or currents with frequencies that are integer multiples of the power system (fundamental) frequency (usually, f = 50 or 60 Hz) [1]. 

Periodic nonsinusoidal waveforms can be subjected to Fourier series and can be decomposed into the sum of fundamental component and harmonics.

In this platform, different waveforms can be visualized depending on the Fourier series. Number of how many harmonic orders will be plotted, waveform frequency, plotting time, dc value of waveform and noise are the variables of plotting. Additionally, waveforms are directly selectable from corresponding buttons. At last, Fourier series coefficients are adjustable in case of need for different configuration.

Go to site:
https://onurhakki.github.io/harmonics/

## Background
### Fourier Series
$f(x) = A_0 + \sum_{n=1} A_n cos(n \ast 2\pi f \ast x)+ \sum_{n=1} B_n sin(n \ast 2\pi f \ast x)$


This page is mostly created for visualization of harmonics. If you like to evaluate Fourier series of a given function, you might need to check following site: [https://github.com/onurhakki/harmonics-python]

### Coeffients

$A_0 = \frac{1}{T} \int_{0}^{T}f(x)dx$

$A_n = \frac{2}{T} \int_{0}^{T}f(x)\ast cos (n \ast 2\pi f \ast x)dx$

$B_n = \frac{2}{T} \int_{0}^{T}f(x)\ast sin (n \ast 2\pi f \ast x)dx$

You can adjust A0, An and Bn components.

Furthermore, there are some built-in values for some of the most used waveforms. Screenshots are also shown in the followings.

### Square Wave
![image](https://user-images.githubusercontent.com/53830179/198528094-95d16c2f-4892-4f87-976c-77bf5b9de55d.png)

### Half-Sine 
![image](https://user-images.githubusercontent.com/53830179/198528843-4cf33741-851e-4a2d-b0df-5467ba56acf3.png)

## Get Results
### RMS (Root-Mean-Square)
$\sqrt{\frac{1}{T}\int_{0}^{T}f^2(x)dx }$

In mathematics and its applications, the root mean square of a set of numbers (abbreviated as RMS) is defined as the square root of the mean square (the arithmetic mean of the squares) of the set [2].

*RMS is equal to the value of the constant direct current that would produce the same power dissipation in a resistive load.*

### THD (Total Harmonics Distortion)
$\frac{\sqrt{\sum_{n=2} V_n^{2}}}{V_1}$

## Additionally
You are able to select variables given in the followings.
#### N Harmonics
#### Frequency (Hz)
#### Time Interval (s)
#### DC Component
#### Noise


## References

[1] Fuchs, Ewald F., and Mohammad AS Masoum. *Power quality in power systems and electrical machines.* Academic press, 2011.

[2] Daintith, J. *A Dictionary of Physics (6 ed.) Root Mean Square Value (RMS value).* Oxford University Press, 2009.


