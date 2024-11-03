import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';

describe('CafeListComponent', () => {
 let component: CafeListComponent;
 let fixture: ComponentFixture<CafeListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafeListComponent ],
     providers: [ CafeService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(CafeListComponent);
   component = fixture.componentInstance;
   component.cafes = [
     new Cafe(faker.number.int(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(), faker.person.fullName(),faker.number.int(), faker.person.fullName())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.cafes[0].nombre)
 });


});