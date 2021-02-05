import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

export default class ListeTest {
   


    static initElement(pList:Array<any>){

        console.info(" methode init elements ");

        let mockList = [
            {
              id: 1,
              data: 'VMC rose',
              date: '2021-01-31 09:46:00'
            },
            {
              id: 2,
              data: 'Volet ouvert',
              date: '2021-01-31 09:46:00'
            },
            {
              id: 3,
              data: 'VMC 2',
              date: '2021-01-31 09:46:00'
            }];

            mockList.forEach(item => pList.push(item));
    }

}