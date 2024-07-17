---
title: Sensor Fusion
author: Govind Saju
hero_image: "/ERC-website-2021/static/fusion_sensors_cover.jpg"
date: 2021-11-24T12:30:00.000+00:00

---
Sensor Fusion refers to the process of combining measurements from different sources to ensure that resulting information has lesser uncertainty as compared to any of the individual measurements. As an example, we can calculate depth information from 2-D images by combining data from 2 cameras at slightly different locations.

The different sources for the information we obtain need not be identical. There are three types of fusion methods:

* **Direct Fusion:** Fusion of data from a set of either heterogenous or homogenous set of sensors along with past history of sensor data
* **Indirect Fusion:** Along with sources in direct fusion, we also use sources like a priori knowledge about the information, and human input.
* **Combination of both:** We can also obtain information by combining the outputs of the above 2 methods of fusion

# Classification of Sensor Fusion Algorithms

Sensor Fusion algorithms can be classified on different parameters:

## On the basis of Abstraction Level (When?)

* **Low Level Fusion:** Fusing the raw data coming in from different sensors
* **Mid Level Fusion:** Fusing the detections from each sensor
* **High Level Fusion:** Fusing the trajectories (predictions) of each sensor

![](/ERC-website-2021/static/fusion_sensors_image3.png)

## On the basis of Centralization Level (Where?)

* **Centralized:** A single central unit deals with the fusion
* **Decentralized:** Each sensor fuses the data and sends it onto the next one
* **Distributed:** Each sensor fuses data locally and sends it to the next unit

![](/ERC-website-2021/static/fusion_sensors_image2.png)

## On the basis of Composition Level (What?)

* **Competitive Fusion:** When different sensors are meant for the same purpose
* **Complementary Fusion:** When different sensors are used to look at different scenes to obtain data that couldn’t have been obtained had the been used individually
* **Coordinated Fusion:** Using multiple sensors to produce a new scene, but looking at the same object. E.g. 3D reconstruction

![](/ERC-website-2021/static/fusion_sensors_image1.png)

For more details regarding the types of sensor fusion, check [here](https://www.thinkautonomous.ai/blog/?p=9-types-of-sensor-fusion-algorithms "https://www.thinkautonomous.ai/blog/?p=9-types-of-sensor-fusion-algorithms").

**Example Calculation Regarding Sensor Fusion**

For a basic example showing how two measurements can be combined, check [this](https://en.wikipedia.org/wiki/Sensor_fusion#Example_calculations "https://en.wikipedia.org/wiki/Sensor_fusion#Example_calculations") section.

# Algorithms on Sensor Fusion

## Based on Sensor Fusion

* The central limit theorem states that when we take a large number of measurements of a parameter, the distribution of their mean tends to a normal distribution, and the mean of the distribution gets closer to the true mean as number of measurements increase.
* In order to see its relation to sensor fusion, assume we have two different sensors A and B. The more samples we take of their readings, the more closely the distribution of the sample averages will resemble a bell curve and thus approach the set’s true average value.  The closer we approach an accurate average value, the less noise will factor into sensor fusion algorithms.
* For more information regarding the central limit theorem, check [here](https://en.wikipedia.org/wiki/Central_limit_theorem "https://en.wikipedia.org/wiki/Central_limit_theorem").

## Based on Kalman Filter

* A Kalman filter is an algorithm that estimates unknown values by taking data inputs from multiple sources, despite possibly having a high amount of signal noise.
* It has the advantage of predicting unknown values more accurately by combining measurements than what is obtained on using the measurements individually.
* The Kalman filter is a recursive algorithm that depends only on the previous state of the system and the current observed sensor data to estimate the current state of the system.
* For more details regarding the Kalman filter, check [here](https://www.kalmanfilter.net/default.aspx "https://www.kalmanfilter.net/default.aspx") or [here](https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/ "https://www.bzarg.com/p/how-a-kalman-filter-works-in-pictures/").

## Based on Bayesian Networks

* Bayes Rule in probability is the backbone of state update equations used for sensor fusion. Bayesian Networks based on Bayes rule predicts the likelihood that any given measurement is a contributing factor in determining a given parameter.
* For a detailed study of Bayesian Networks, check [here](https://en.wikipedia.org/wiki/Bayesian_network "https://en.wikipedia.org/wiki/Bayesian_network").
* Some of the algorithms used for Sensor Fusion based on Bayesian networks are [K2](http://web.cs.wpi.edu/\~cs539/s05/Projects/k2_algorithm.pdf "http://web.cs.wpi.edu/~cs539/s05/Projects/k2_algorithm.pdf"), [hill climbing](https://www.geeksforgeeks.org/introduction-hill-climbing-artificial-intelligence/ "https://www.geeksforgeeks.org/introduction-hill-climbing-artificial-intelligence/"), [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing "https://en.wikipedia.org/wiki/Simulated_annealing").

## The Dempster-Shafer Theory

* This theory, called the theory of belief functions or the evidence theory, is a general framework for working with uncertainties and measurements.
* Dempster–Shafer theory is based on two ideas: obtaining degrees of belief for one question from subjective probabilities for a related question, and Dempster's rule for combining such degrees of belief when they are based on independent items of evidence.
* For more details on this theory, check [here](https://en.wikipedia.org/wiki/Dempster%E2%80%93Shafer_theory "https://en.wikipedia.org/wiki/Dempster%E2%80%93Shafer_theory") or [here](https://www.geeksforgeeks.org/ml-dempster-shafer-theory/ "https://www.geeksforgeeks.org/ml-dempster-shafer-theory/").

## Convolutional Neural Networks

* Convolutional neural network based methods can simultaneously process many channels of sensor data. From this fusion of such data, they produce classification results based on image recognition.
* For a detailed study of CNNs, check [here](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53 "https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53").

# Conclusion

Sensor Fusion is a vast field, with a huge number of algorithms to combine sensor data to obtain measurements. The mathematics behind sensor fusion is often complicated and requires a good understanding of concepts of probability. The goal of this article was to give a brief overview of different types of sensor fusion and to give a bird’s eye view of the various algorithms that can be used for sensor fusion.