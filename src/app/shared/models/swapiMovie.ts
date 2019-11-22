export class SwapiMovie {
    count: number;
    next: string;
    results: SubArray2;
    constructor(
        count: number,
        next: string,
        results: SubArray2
    ) {
        this.count = count;
        this.next = next;
        this.results = results;
    }

}

export class SubArray2 {
    id: number;
    title: string;
    episode_id: number;
    director: string;
    opening_crawl: string;
    release_date: string;
    producer: string;
  }
