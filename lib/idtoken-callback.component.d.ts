import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';
export declare class IdTokenCallbackComponent implements OnInit {
    private router;
    private adalService;
    constructor(router: Router, adalService: EZCodeAdalService);
    ngOnInit(): void;
}
